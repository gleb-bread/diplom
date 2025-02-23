import * as MarkdownTypes from '../types';
import { AHandler } from './AHandler';

export class FontHandler extends AHandler {
    protected _items: MarkdownTypes.BasicMarkdownElement[];
    protected _map_items: MarkdownTypes.MapBasicMarkdownElement;
    protected _map_specsimbols: MarkdownTypes.MarkdownSpecsimbols = {};
    protected _has_single_item: boolean = false;
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
        const nextItem = this.getItem(this._specsimbol + v);
        const lastOutputItem = this.getLastOutputItem();
        let result = '';

        if (isLast) {
            this._output_items.forEach((i, indx) => {
                const index = this._output_items.length - indx;
                const item = this._output_items[index];
                if (item) {
                    result += this.getEndTag(item);
                }
            });

            this.restoreOutputVariables();
        }

        if (nextItem) {
            if (lastOutputItem?.ignoreSpecSimbols) {
                if (lastOutputItem.endSimbol === nextItem.specSimbol) {
                    result += this.getStringByItem(nextItem);
                    this._specsimbol = '';

                    if (this._has_single_item) {
                        return this.getIsNotEndText(result);
                    }

                    return this.getIsEndText(result);
                } else {
                    result += this._specsimbol + v;
                    this._specsimbol = '';
                    return this.getIsNotEndText(result);
                }
            } else {
                this._specsimbol += v;

                if (lastOutputItem?.endSimbol === nextItem.specSimbol) {
                    result += this.getStringByItem(nextItem);
                    this._specsimbol = '';

                    if (this._has_single_item) {
                        return this.getIsNotEndText(result);
                    }

                    return this.getIsEndText(result);
                }

                return this.getIsNotEndText(result);
            }
        } else if (preventItem && !nextItem) {
            result = this.getStringByItem(preventItem);

            this._has_single_item = this._has_single_item
                ? this._has_single_item
                : !!preventItem.singlComponent;

            if (!isSpecsimbol) {
                result += v;
                this._specsimbol = '';
            } else this._specsimbol = v;

            if (this._has_single_item) {
                return this.getIsNotEndText(result);
            }

            return this.getIsEndText(result);
        }

        if (isSpecsimbol) {
            result += this._specsimbol;
            this._specsimbol = v;
        } else {
            result += this._specsimbol + v;
            this._specsimbol = '';
        }

        if (this._specsimbol) {
            const item = this.getItem(this._specsimbol);
            if (item) result += this.getStringByItem(item);
        }

        if (this._has_single_item) {
            return this.getIsNotEndText(result);
        } else {
            return this.getIsEndText(result);
        }
    }
}
