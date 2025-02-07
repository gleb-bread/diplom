import * as MarkdownTypes from './types';
import { AMarkdown } from './AMarkdown';
import { DefaultConfig } from './Config/DefaultConfig';
import { DefaultHandler } from './Handler/DefaultHandler';

export class DefaultMarkdown extends AMarkdown {
    protected _config: DefaultConfig;
    protected _handler: DefaultHandler;

    constructor(config?: MarkdownTypes.MarkdownConfig) {
        super();

        this._config = new DefaultConfig(config);
        this._handler = new DefaultHandler(this._config);

        return this;
    }
}
