import * as MarkdownTypes from '../types';

export abstract class AHandler {
    protected abstract _items: MarkdownTypes.BasicMarkdownElement[];
    protected abstract _map_items: MarkdownTypes.MapBasicMarkdownElement;
    protected abstract _map_specsimbols: MarkdownTypes.MarkdownSpecsimbols;
    protected abstract _specsimbol: string;
    protected abstract _output_items: MarkdownTypes.BasicMarkdownElement[];
    public abstract type: MarkdownTypes.MarkdownElementTypes;

    public abstract handlerSimbol(
        v: string,
        isLast?: boolean
    ): MarkdownTypes.HandlerResultText;

    protected getInputSpecsimbol(
        v: string
    ): null | MarkdownTypes.MarkdownSpecsimbol {
        return this._map_specsimbols[v] ?? null;
    }

    protected getItem(v: string): MarkdownTypes.BasicMarkdownElement | null {
        return this._map_items[v] ?? null;
    }

    public getSpecsimbols(): MarkdownTypes.MarkdownSpecsimbols {
        let result = {} as MarkdownTypes.MarkdownSpecsimbols;

        this._items.forEach((grandItem) => {
            result[grandItem.specSimbol] = this.createSpecsimbol(
                grandItem,
                false
            );

            if (grandItem.endSimbol && !result[grandItem.endSimbol]) {
                result[grandItem.endSimbol] = this.createSpecsimbol(
                    grandItem,
                    true
                );
                this.addSubSpecsimbols(
                    grandItem.endSimbol,
                    grandItem.typeElement,
                    result
                );
            }

            this.setMapMarkdownElement(grandItem);

            this.addSubSpecsimbols(
                grandItem.specSimbol,
                grandItem.typeElement,
                result
            );
        });

        this._map_specsimbols = result;

        return result;
    }

    private createSpecsimbol(grandItem: any, isEndSimbol: boolean) {
        return {
            isFullSpecsimbol: true,
            isEndSimbol,
            type: grandItem.typeElement,
        };
    }

    private addSubSpecsimbols(
        specSimbol: string,
        type: any,
        result: MarkdownTypes.MarkdownSpecsimbols
    ) {
        this.getSubSpecsimbols(specSimbol).forEach((item) => {
            result[item] ??= {
                isFullSpecsimbol: false,
                isEndSimbol: false,
                type,
            };
        });
    }

    protected getSubSpecsimbols(v: string): string[] {
        let result = v.split('');
        return result;
    }

    protected setMapMarkdownElement(v: MarkdownTypes.BasicMarkdownElement) {
        this._map_items[v.specSimbol] = v;
    }

    protected getStringByItem(
        item: MarkdownTypes.BasicMarkdownElement
    ): string {
        const lastOutputItem = this.getLastOutputItem();

        if (lastOutputItem === null) {
            let str = '';

            if (!this._specsimbol) {
                this._output_items.push(item);
                this._specsimbol += item.specSimbol;
            } else {
                this._output_items.push(item);
                this._specsimbol = '';
                str += this.getStartTag(item);
            }

            return str;
        } else {
            if (lastOutputItem.endSimbol === item.specSimbol) {
                this._output_items.shift();
                this._specsimbol = '';
                return this.getEndTag(item);
            } else {
                let str = '';
                this._specsimbol = item?.specSimbol ?? '';
                this._output_items.push(item);
                str += this.getStartTag(item);
                return str;
            }
        }
    }

    protected getEndTag(item: MarkdownTypes.BasicMarkdownElement) {
        const tag = item.tag ?? null;

        let result = '';

        if (tag) result += `</${tag}`;
        if (!result) return result;

        result += '>';

        return result;
    }

    protected getStartTag(item: MarkdownTypes.BasicMarkdownElement) {
        const tag = item.tag ?? null;
        const tagClass = item.class ?? null;

        let result = '';

        if (tag) result += `<${tag} `;
        if (tagClass && !!result) result += `class="${tagClass}"`;
        if (!result) return result;

        result += '>';

        return result;
    }

    protected getLastOutputItem(): MarkdownTypes.BasicMarkdownElement | null {
        return this._output_items[this._output_items.length - 1] ?? null;
    }
}
