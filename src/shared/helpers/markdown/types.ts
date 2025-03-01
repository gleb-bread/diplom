import { AHandler } from './SimbolHandlers/AHandler';

// h1: '#',
// h2: '##',
// h3: '###',
// h4: '####',
// h5: '#####',
// h6: '######',
// italic: '*',
// bold: '**',
// underlined: '~~',
// strikethrough: '~~~',
// unordered_list: '-',
// ordered_list: /^\d+\.$/,
// link: '[',
// image: '![',
// code: '`',
// code_multiline: '```',
// quote: '>',
// text_style_list: '>>>',
// backslash: '\\',

// h1: '\n',
// h2: '\n',
// h3: '\n',
// h4: '\n',
// h5: '\n',
// h6: '\n',
// italic: '*',
// bold: '**',
// underlined: '~~',
// strikethrough: '~~~',
// unordered_list: '\n',
// ordered_list: '\n',
// link: ')',
// image: ')',
// code: /[`]|[\n]/,
// code_multiline: '```',
// quote: '\n',
// text_style_list: '<<<',
// backslash: '',

export type MarkdownElementTypes =
    | 'font'
    | 'headers'
    | 'code'
    | 'table'
    | 'link'
    | 'skip'
    | 'list';

export type MarkdownElementTargets = 'link_text' | 'link_href';

export type BasicMarkdownElement = {
    specSimbol: string;
    typeElement: MarkdownElementTypes;
    ignoreSpecSimbols: boolean;
    singlComponent: boolean;
    target?: MarkdownElementTargets;
    tag?: string;
    endSimbol: string | null;
    class?: string;
    tagItem?: string;
};

export type MapBasicMarkdownElement = {
    [key: string]: BasicMarkdownElement;
};

export type MarkdownSpecsimbols = {
    [key: string]: MarkdownSpecsimbol;
};

export type MarkdownSpecsimbol = {
    isFullSpecsimbol: boolean;
    isEndSimbol: boolean;
    type: MarkdownElementTypes;
};

export type MapMarkdownSimbolHandlers = {
    [key: string]: AHandler;
};

export type HandlerResultText = {
    isEnd: number;
    text: string;
};
