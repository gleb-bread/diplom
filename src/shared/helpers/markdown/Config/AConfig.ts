import * as MarkdownTypes from '../types';

export abstract class AConfig {
    protected abstract _tags: MarkdownTypes.TagOptions;
    protected abstract _classes: MarkdownTypes.ClassOptions;
    protected abstract _simbol_start: MarkdownTypes.SimbolOptions;
    protected abstract _simbol_end: MarkdownTypes.SimbolOptions;

    public get tags() {
        return this._tags;
    }
    public get classes() {
        return this._classes;
    }
    public get simbol_start() {
        return this._simbol_start;
    }
    public get simbol_end() {
        return this._simbol_end;
    }
}
