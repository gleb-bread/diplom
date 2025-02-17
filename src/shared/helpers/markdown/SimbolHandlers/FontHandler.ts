import * as MarkdownTypes from '../types';
import { AHandler } from './AHandler';

export class FontHandler extends AHandler {
    protected _items: MarkdownTypes.BasicMarkdownElement[];
    protected _map_items: MarkdownTypes.MapBasicMarkdownElement;
    protected _map_specsimbols: MarkdownTypes.MarkdownSpecsimbols = {};
    protected _output_items: MarkdownTypes.BasicMarkdownElement[] = [];
    protected _specsimbol: string = '';
    public type: MarkdownTypes.MarkdownElementTypes = 'font';

    constructor(items: MarkdownTypes.BasicMarkdownElement[]) {
        super();

        this._items = items;
        this._map_items = {};
    }

    public handlerSimbol(
        v: string,
        isLast: boolean = false
    ): MarkdownTypes.HandlerResultText {
        const isSpecsimbol = this.getInputSpecsimbol(v);
        const preventItem = this.getItem(this._specsimbol);

        if (isSpecsimbol) {
            const totalSpecsimbol = this._specsimbol + v;
            let item = this.getItem(totalSpecsimbol);

            if (item === null && preventItem != null) {
                const str = this.getStringByItem(preventItem);

                this._specsimbol = v;

                if (isLast) {
                    this._specsimbol = '';
                }

                return {
                    text: isLast ? str + v : str,
                    isEnd: true,
                };
            } else if (item) {
                this._specsimbol += v;
                let str = '';

                if (isLast) {
                    str += this.getStringByItem(item);
                    this._specsimbol = '';
                }

                return {
                    text: str,
                    isEnd: false,
                };
            } else {
                this._specsimbol += v;
                let str = '';

                if (preventItem) {
                    str += this.getStringByItem(preventItem);
                }

                return {
                    text: v,
                    isEnd: false,
                };
            }
        } else {
            let str = '';
            let lastItem = this.getLastOutputItem();
            if (preventItem) str += this.getStringByItem(preventItem);

            if (isLast && lastItem) {
                str += this.getEndTag(lastItem);
                this._output_items.shift();
            } else if (lastItem) {
                if (
                    lastItem.singlComponent !== true &&
                    lastItem.specSimbol != preventItem?.specSimbol
                )
                    str += this.getStringByItem(lastItem);
            }

            this._specsimbol = '';

            return {
                text: str + v,
                isEnd: false,
            };
        }
    }
}
