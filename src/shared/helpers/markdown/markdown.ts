import * as MarkdownTypes from './types';
import * as MarkdownTemplates from './template';

export class Markdown {
    private _tags: MarkdownTypes.TagOptions;
    private _classes: MarkdownTypes.ClassOptions;
    private _simbol_start: MarkdownTypes.SimbolOptions;
    private _simbol_end: MarkdownTypes.SimbolOptions;
    private _markdown_elements: MarkdownTypes.MarkdownElement[] = [];
    private _map_markdown_elements: MarkdownTypes.MapMarkdownElement = {};
    private _markdown_spec_simbol: string = '';
    private _map_markdown_spec_simbols: MarkdownTypes.MapMarkdownSpecSimbols =
        {};

    constructor(config?: MarkdownTypes.MarkdownConfig) {
        this._classes = {
            ...MarkdownTemplates.ClassOptions(),
            ...(config?.classes ?? {}),
        };
        this._tags = {
            ...MarkdownTemplates.TagOptions(),
            ...(config?.tags ?? {}),
        };

        this._simbol_start = {
            ...MarkdownTemplates.SimbolOptionsStart(),
            ...(config?.simbol_start ?? {}),
        };

        this._simbol_end = {
            ...MarkdownTemplates.SimbolOptionsEnd(),
            ...(config?.simbol_end ?? {}),
        };

        this.genericMapMarkdownElement();

        return this;
    }

    public getHTML(input: string) {
        this._markdown_elements = [];

        let result = '';

        const text = input.trim().split('');

        text.forEach((v, index) => {
            let str = this.handlerSimbol(v);
            result += str;
            const lastElement = this.getLastElement();
            if (v == '~')
                console.log(index === text.length - 1, text[text.length - 1]);
            if (
                Boolean(this._markdown_spec_simbol) &&
                index === text.length - 1
            ) {
                result += this._markdown_spec_simbol;
            }

            if (!!lastElement && index === text.length - 1)
                result += this.generateEndHTMLTag(lastElement);
        });

        return result;
    }

    private genericMapMarkdownElement() {
        let mapping: MarkdownTypes.MapMarkdownElement = {};

        Object.keys(this._simbol_start).forEach((k) => {
            const key = k as keyof MarkdownTypes.SimbolOptions;

            if (
                this._simbol_end[key] === undefined ||
                this._simbol_end[key] === null
            )
                throw Error(`Not define end tag or Regex on ${key}`);

            const startSymbol =
                this._simbol_start[key] instanceof RegExp
                    ? this._simbol_start[key].source // Преобразование RegExp в строку
                    : this._simbol_start[key];

            if (startSymbol) {
                mapping[startSymbol] = () => {
                    return {
                        class: this._classes[key] ?? '',
                        tag: this._tags[key] ?? '',
                        endSimbol: this._simbol_end[key],
                        end: false,
                        elemnts: [],
                    } as MarkdownTypes.MarkdownElement;
                };

                if (!this._map_markdown_spec_simbols[startSymbol]) {
                    this._map_markdown_spec_simbols[startSymbol] = true;

                    const complexSpecSimbol = startSymbol.split('');

                    complexSpecSimbol.forEach((item) => {
                        if (!this._map_markdown_spec_simbols[item]) {
                            this._map_markdown_spec_simbols[item] = true;
                        }
                    });
                }
            }
        });

        const unorderedListKey =
            this._simbol_start['unordered_list'] instanceof RegExp
                ? this._simbol_start['unordered_list'].source // Преобразование RegExp в строку
                : this._simbol_start['unordered_list'];

        const orderedListKey =
            this._simbol_start['ordered_list'] instanceof RegExp
                ? this._simbol_start['ordered_list'].source // Преобразование RegExp в строку
                : this._simbol_start['ordered_list'];

        if (unorderedListKey)
            mapping[unorderedListKey]().tagItem = this._tags.list_item;
        if (orderedListKey)
            mapping[orderedListKey]().tagItem = this._tags.list_item;

        this._map_markdown_elements = mapping;
    }

    private getLastElement() {
        if (!this._markdown_elements.length) return null;

        let lastElement =
            this._markdown_elements[this._markdown_elements.length - 1];

        if (lastElement.end) return null;

        let isLast = false;

        do {
            if (!lastElement.elemnts?.length) {
                isLast = true;
            } else {
                isLast = true;

                for (let i = 1; i <= lastElement.elemnts.length; i++) {
                    const element =
                        lastElement.elemnts[lastElement.elemnts.length - i];
                    if (!element.end) {
                        lastElement =
                            lastElement.elemnts[lastElement.elemnts.length - 1];

                        isLast = false;
                        break;
                    }
                }
            }
        } while (!isLast);

        return lastElement;
    }

    private handlerSimbol(v: string) {
        const lastElement = this.getLastElement();

        const checkSpecSimbol = this.checkMarkdownKey(v);

        let str = '';

        if (
            !!lastElement &&
            (lastElement.endSimbol === this._markdown_spec_simbol ||
                lastElement.endSimbol === v)
        ) {
            let str = this.generateEndHTMLTag(lastElement);

            return str;
        }

        if (!checkSpecSimbol) {
            let newElement =
                this._map_markdown_elements[this._markdown_spec_simbol];

            if (newElement?.()) {
                let NElement = newElement();

                if (!lastElement) {
                    this._markdown_elements.push(NElement);
                } else {
                    lastElement.elemnts.push(NElement);
                }

                str += this.generateStartHTMLTag(NElement);
            } else {
                str += this._markdown_spec_simbol;
            }

            this._markdown_spec_simbol = '';

            if (!checkSpecSimbol) return str + v;
            else return str;
        }

        return '';
    }

    private generateEndHTMLTag(element: MarkdownTypes.MarkdownElement) {
        element.end = true;
        this._markdown_spec_simbol = '';
        return `</${element.tag}>`;
    }

    private generateStartHTMLTag(element: MarkdownTypes.MarkdownElement) {
        return `<${element.tag} class=${element.class}">`;
    }

    private checkMarkdownKey(symbol: string) {
        const totalSimbol = this._markdown_spec_simbol + symbol;

        const result = this._map_markdown_spec_simbols[totalSimbol];

        if (result) {
            this._markdown_spec_simbol = totalSimbol;
            return true;
        } else {
            return false;
        }
    }
}
