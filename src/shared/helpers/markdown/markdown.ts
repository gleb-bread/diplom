import * as MarkdownTypes from './types';
import * as MarkdownTemplates from './template';

export class Markdown {
    private _tags: MarkdownTypes.TagOptions;
    private _classes: MarkdownTypes.ClassOptions;
    private _simbol_start: MarkdownTypes.SimbolOptions;
    private _simbol_end: MarkdownTypes.SimbolOptions;
    private _input: string = '';
    private _output: string = '';
    private _markdown_elements: MarkdownTypes.MarkdownElement[] = [];
    private _map_start_markdown_elements: MarkdownTypes.MapMarkdownElement = {};
    private _map_end_markdown_elements: MarkdownTypes.MapMarkdownElement = {};

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

        this._input = config?.input ?? '';

        this.genericMapMarkdownStartElement();
        this.genericMapMarkdownEndElement();
    }

    private getHTML() {
        let result = '';

        this._input.split('').forEach((v) => {
            this.handlerSimbol(v);
            const firstElem = this._markdown_elements[0];
            if(!firstElem) result += v;
            if(firstElem.end) result += ;
        });
    }

    private getFirstElemStr(){
        const firstElem = this.getFirstElem();
        if()
    }

    private genericMapMarkdownStartElement() {
        let mapping: MarkdownTypes.MapMarkdownElement = {};
        Object.keys(this._simbol_start).forEach((k) => {
            const key = k as keyof MarkdownTypes.SimbolOptions;

            mapping[key] = {
                class: this._classes[key] ?? '',
                tag: this._tags[key] ?? '',
                value: '',
                end: false,
            };
        });

        mapping['unordered_list'].tagItem = this._tags.list_item;
        mapping['ordered_list'].tagItem = this._tags.list_item;

        this._map_start_markdown_elements = mapping;
    }

    private genericMapMarkdownEndElement() {
        let mapping: MarkdownTypes.MapMarkdownElement = {};
        Object.keys(this._simbol_end).forEach((k) => {
            const key = k as keyof MarkdownTypes.SimbolOptions;

            mapping[key] = {
                class: this._classes[key] ?? '',
                tag: this._tags[key] ?? '',
                value: '',
                end: false,
            };
        });

        mapping['unordered_list'].tagItem = this._tags.list_item;
        mapping['ordered_list'].tagItem = this._tags.list_item;

        this._map_end_markdown_elements = mapping;
    }

    private getNewMarkdownElement(v: string) {
        return this._map_start_markdown_elements[v] ?? null;
    }

    private getEndMarkdownElement(v: string) {
        return this._map_end_markdown_elements[v] ?? null;
    }

    private getFirstElem() {
        let elem = this._markdown_elements[0];
        let isEnd = elem ? true : false;

        while (isEnd) {
            let deepElem = elem.elemnts?.[0];
            if (!deepElem) {
                isEnd = false;
            } else {
                elem = deepElem;
            }
        }

        return elem;
    }

    private handlerSimbol(v: string) {
        const newElem = this.getNewMarkdownElement(v);
        const endElem = this.getEndMarkdownElement(v);
        const firstElem = this.getFirstElem();

        if (newElem.tag === firstElem.tag) {
            firstElem.end = true;
        } else if (firstElem) {
            if (!firstElem.elemnts) {
                firstElem.elemnts = [newElem];
            } else {
                firstElem.elemnts.unshift(newElem);
            }
        } else {
            this._markdown_elements.unshift(newElem);
        }

        if (!newElem) {
            if (endElem) {
                firstElem.end = true;
            } else {
                firstElem.value = firstElem.value + v;
            }
        }
    }
}
