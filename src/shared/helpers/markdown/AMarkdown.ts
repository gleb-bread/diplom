import { AHandler } from './Handler/AHandler';
import { AConfig } from './Config/AConfig';

export abstract class AMarkdown {
    protected abstract _config: AConfig;
    protected abstract _handler: AHandler;

    public getHTML(input: string): string {
        return this._handler.getHTML(input);
    }
}
