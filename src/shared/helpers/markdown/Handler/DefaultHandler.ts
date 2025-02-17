import type { AHandler as AHandlerSimbol } from '../SimbolHandlers/AHandler';
import * as MarkdownTypes from '../types';
import { AHandler } from './AHandler';

export class DefaultHandler extends AHandler {
    protected _handlers: AHandlerSimbol[];
    protected _map_spec_simbols: MarkdownTypes.MarkdownSpecsimbols = {};
    protected _map_handlers: MarkdownTypes.MapMarkdownSimbolHandlers = {};
    protected _lastType: MarkdownTypes.MarkdownElementTypes | null = null;

    constructor(...handlers: AHandlerSimbol[]) {
        super();

        this._handlers = handlers;

        this.getMaps();
    }

    public getHTML(input: string) {
        let result = '';

        const text = input.trim().split('');

        text.forEach((v, index) => {
            let str = this.handlerSimbol(v);

            result += str;
            if (index === text.length - 1 && !(this._lastType === null)) {
                result +=
                    this._map_handlers[this._lastType].handlerSimbol('', true)
                        ?.text ?? '';
            } else if (index === text.length - 1 && !this._lastType) {
                result += v;
            }

            if (index === text.length - 1) {
                this._lastType = null;
            }
        });

        return result;
    }

    private handlerSimbol(v: string) {
        const specSimbol = this._map_spec_simbols[v] || null;

        if (!specSimbol && !this._lastType) return v;

        const currentType = specSimbol?.type;
        const preventType = this._lastType;
        const handler = this._map_handlers[currentType];
        let preventHandler: AHandlerSimbol | null = null;

        if (preventType) {
            preventHandler = this._map_handlers[preventType];
        }

        if (!handler && !preventHandler) return '';

        let str = '';

        if (preventHandler && handler) {
            if (preventHandler.type === handler.type) {
                let result = handler.handlerSimbol(v);
                if (result.isEnd) this._lastType = null;
                str += result.text;
            } else {
                str += preventHandler.handlerSimbol(v).text;
                let result = handler.handlerSimbol(v);
                if (result.isEnd) this._lastType = null;
                str += result.text;
            }
            this._lastType = currentType;
        } else if (preventHandler && !handler) {
            let result = preventHandler.handlerSimbol(v);
            if (result.isEnd) this._lastType = null;
            str += result.text;
        } else if (!preventHandler && handler) {
            let result = handler.handlerSimbol(v);
            if (result.isEnd) this._lastType = null;
            str += result.text;
            this._lastType = currentType;
        }

        return str;
    }
}
