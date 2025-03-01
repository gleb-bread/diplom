import * as MarkdownTypes from './types';
import { AMarkdown } from './AMarkdown';
import { DefaultHandler } from './Handler/DefaultHandler';
import { SimbolHandlers } from './SimbolHandlers';
import { CodeHandler } from './SimbolHandlers/CodeHandler';

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
            ]),

            new SimbolHandlers.HeadersHandler([
                {
                    specSimbol: '#',
                    singlComponent: true,
                    tag: 'h1',
                    typeElement: 'headers',
                    class: 'diplim_h1',
                    endSimbol: null,
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '##',
                    singlComponent: true,
                    tag: 'h2',
                    typeElement: 'headers',
                    class: 'diplim_h2',
                    endSimbol: null,
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '###',
                    singlComponent: true,
                    tag: 'h3',
                    typeElement: 'headers',
                    class: 'diplim_h3',
                    endSimbol: null,
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '####',
                    singlComponent: true,
                    tag: 'h4',
                    typeElement: 'headers',
                    class: 'diplim_h4',
                    endSimbol: null,
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '#####',
                    singlComponent: true,
                    tag: 'h5',
                    typeElement: 'headers',
                    class: 'diplim_h5',
                    endSimbol: null,
                    ignoreSpecSimbols: false,
                },
                {
                    specSimbol: '######',
                    singlComponent: true,
                    tag: 'h6',
                    typeElement: 'headers',
                    class: 'diplim_h6',
                    endSimbol: null,
                    ignoreSpecSimbols: false,
                },
            ]),

            new SimbolHandlers.SkipHandler([
                {
                    specSimbol: '\\',
                    singlComponent: false,
                    typeElement: 'skip',
                    ignoreSpecSimbols: false,
                    endSimbol: null,
                },
            ]),

            new SimbolHandlers.CodeHandler([
                {
                    specSimbol: '```',
                    singlComponent: true,
                    tag: 'code',
                    typeElement: 'code',
                    class: 'diplim_code_block',
                    ignoreSpecSimbols: true,
                    endSimbol: '```',
                },
                {
                    specSimbol: '`',
                    singlComponent: false,
                    tag: 'code',
                    typeElement: 'code',
                    class: 'diplim_inline_code',
                    ignoreSpecSimbols: true,
                    endSimbol: '`',
                },
            ]),

            new SimbolHandlers.LinkHandler([
                {
                    specSimbol: '[',
                    singlComponent: true,
                    typeElement: 'link',
                    class: 'diplim_link',
                    target: 'link_text',
                    ignoreSpecSimbols: false,
                    endSimbol: ']',
                },
                {
                    specSimbol: '(',
                    singlComponent: true,
                    typeElement: 'link',
                    tag: 'a',
                    class: 'diplim_link',
                    target: 'link_href',
                    ignoreSpecSimbols: false,
                    endSimbol: ')',
                },
            ])
        );

        return this;
    }
}
