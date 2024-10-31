import * as MarkdownTypes from './types';
import * as MarkdownTemplates from './template';

export class Markdown {
    private _tags: MarkdownTypes.TagOptions;
    private _classes: MarkdownTypes.ClassOptions;
    private _simbol: MarkdownTypes.SimbolOptions;
    private _input: string = '';
    private _output: string = '';

    constructor(
        tags?: MarkdownTypes.TagChangeOptions,
        classes?: MarkdownTypes.ClassOptions,
        input?: string
    ) {
        this._classes = { ...MarkdownTemplates.ClassOptions(), ...classes };
        this._tags = { ...MarkdownTemplates.TagOptions(), ...tags };
        this._input = input ?? '';
    }

    private getHTML() {
        let result = '';

        this._input.split('').forEach((key) => {
            result;
        });
    }
}
