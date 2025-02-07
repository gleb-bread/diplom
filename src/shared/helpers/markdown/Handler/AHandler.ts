import * as MarkdownTypes from '../types';
import { AConfig } from '../Config/AConfig';

export abstract class AHandler {
    protected abstract _markdown_elements: MarkdownTypes.MarkdownElement[];
    protected abstract _map_markdown_elements: MarkdownTypes.MapMarkdownElement;
    protected abstract _markdown_spec_simbol: string;
    protected abstract _map_markdown_spec_simbols: MarkdownTypes.MapMarkdownSpecSimbols;
    protected abstract _config: AConfig;

    public abstract getHTML(input: string): string;
}
