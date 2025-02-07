import * as MarkdownTypes from '../types';
import * as MarkdownTemplates from '../template';
import { AConfig } from './AConfig';

export class DefaultConfig extends AConfig {
    protected _tags: MarkdownTypes.TagOptions;
    protected _classes: MarkdownTypes.ClassOptions;
    protected _simbol_start: MarkdownTypes.SimbolOptions;
    protected _simbol_end: MarkdownTypes.SimbolOptions;

    constructor(config?: MarkdownTypes.MarkdownConfig) {
        super();

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

        return this;
    }
}
