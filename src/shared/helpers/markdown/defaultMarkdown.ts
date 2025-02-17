import * as MarkdownTypes from './types';
import { AMarkdown } from './AMarkdown';
import { DefaultHandler } from './Handler/DefaultHandler';
import { SimbolHandlers } from './SimbolHandlers';

export class DefaultMarkdown extends AMarkdown {
    protected _handler: DefaultHandler;

    constructor() {
        super();

        this._handler = new DefaultHandler(
            new SimbolHandlers.FontHandler([
                {
                    specSimbol: '**',
                    singlComponent: false,
                    tag: 'b',
                    typeElement: 'font',
                    class: 'diplim_bold',
                    ignoreSpecSimbols: false,
                    endSimbol: '**',
                },
                {
                    specSimbol: '#',
                    singlComponent: true,
                    tag: 'h1',
                    typeElement: 'font',
                    class: 'diplim_h1',
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '##',
                    singlComponent: true,
                    tag: 'h2',
                    typeElement: 'font',
                    class: 'diplim_h2',
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '###',
                    singlComponent: true,
                    tag: 'h3',
                    typeElement: 'font',
                    class: 'diplim_h3',
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '####',
                    singlComponent: true,
                    tag: 'h4',
                    typeElement: 'font',
                    class: 'diplim_h4',
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '#####',
                    singlComponent: true,
                    tag: 'h5',
                    typeElement: 'font',
                    class: 'diplim_h5',
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '######',
                    singlComponent: true,
                    tag: 'h6',
                    typeElement: 'font',
                    class: 'diplim_h6',
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '*',
                    singlComponent: false,
                    tag: 'i',
                    typeElement: 'font',
                    class: 'diplim_italic',
                    ignoreSpecSimbols: false,
                    endSimbol: '*',
                },
                {
                    specSimbol: '**',
                    singlComponent: false,
                    tag: 'b',
                    typeElement: 'font',
                    class: 'diplim_bold',
                    ignoreSpecSimbols: false,
                    endSimbol: '**',
                },
                {
                    specSimbol: '~~',
                    singlComponent: false,
                    tag: 'u',
                    typeElement: 'font',
                    class: 'diplim_underlined',
                    ignoreSpecSimbols: false,
                    endSimbol: '~~',
                },
                {
                    specSimbol: '~~~',
                    singlComponent: false,
                    tag: 's',
                    typeElement: 'font',
                    class: 'diplim_strikethrough',
                    ignoreSpecSimbols: false,
                    endSimbol: '~~~',
                },
                {
                    specSimbol: '`',
                    singlComponent: false,
                    tag: 'code',
                    typeElement: 'font',
                    class: 'diplim_inline_code',
                    ignoreSpecSimbols: true,
                    endSimbol: '`',
                },
                {
                    specSimbol: '```',
                    singlComponent: false,
                    tag: 'code',
                    typeElement: 'font',
                    class: 'diplim_code_block',
                    ignoreSpecSimbols: true,
                    endSimbol: '```',
                },
            ])
        );

        return this;
    }
}
