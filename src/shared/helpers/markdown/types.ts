import * as MarkdownEnums from './enum';

export type ClassOptions = {
    [MarkdownEnums.MarkdownClassEnum.FONT]?: string;
    [MarkdownEnums.MarkdownClassEnum.DEFAULT]?: string;
    [MarkdownEnums.MarkdownClassEnum.H1]?: string;
    [MarkdownEnums.MarkdownClassEnum.H2]?: string;
    [MarkdownEnums.MarkdownClassEnum.H3]?: string;
    [MarkdownEnums.MarkdownClassEnum.H4]?: string;
    [MarkdownEnums.MarkdownClassEnum.H5]?: string;
    [MarkdownEnums.MarkdownClassEnum.H6]?: string;
    [MarkdownEnums.MarkdownClassEnum.ITALIC]?: string;
    [MarkdownEnums.MarkdownClassEnum.BOLD]?: string;
    [MarkdownEnums.MarkdownClassEnum.UNDERLINED]?: string;
    [MarkdownEnums.MarkdownClassEnum.STRIKETHROUGH]?: string;
    [MarkdownEnums.MarkdownClassEnum.UNORDERED_LIST]?: string;
    [MarkdownEnums.MarkdownClassEnum.ORDERED_LIST]?: string;
    [MarkdownEnums.MarkdownClassEnum.LINK]?: string;
    [MarkdownEnums.MarkdownClassEnum.IMAGE]?: string;
    [MarkdownEnums.MarkdownClassEnum.CODE]?: string;
    [MarkdownEnums.MarkdownClassEnum.CODE_MULTILINE]?: string;
    [MarkdownEnums.MarkdownClassEnum.QUOTE]?: string;
    [MarkdownEnums.MarkdownClassEnum.LIST_ITEM]?: string;
    [MarkdownEnums.MarkdownClassEnum.TEXT_STYLE_LIST]?: string;
    [MarkdownEnums.MarkdownClassEnum.BACKSLASH]?: string;
};

export type TagChangeOptions = Omit<TagOptions, 'text_style_list'>;

export type TagOptions = {
    [MarkdownEnums.MarkdownTagEnum.H1]?: string;
    [MarkdownEnums.MarkdownTagEnum.H2]?: string;
    [MarkdownEnums.MarkdownTagEnum.H3]?: string;
    [MarkdownEnums.MarkdownTagEnum.H4]?: string;
    [MarkdownEnums.MarkdownTagEnum.H5]?: string;
    [MarkdownEnums.MarkdownTagEnum.H6]?: string;
    [MarkdownEnums.MarkdownTagEnum.ITALIC]?: string;
    [MarkdownEnums.MarkdownTagEnum.BOLD]?: string;
    [MarkdownEnums.MarkdownTagEnum.UNDERLINED]?: string;
    [MarkdownEnums.MarkdownTagEnum.STRIKETHROUGH]?: string;
    [MarkdownEnums.MarkdownTagEnum.UNORDERED_LIST]?: string;
    [MarkdownEnums.MarkdownTagEnum.ORDERED_LIST]?: string;
    [MarkdownEnums.MarkdownTagEnum.LINK]?: string;
    [MarkdownEnums.MarkdownTagEnum.IMAGE]?: string;
    [MarkdownEnums.MarkdownTagEnum.CODE]?: string;
    [MarkdownEnums.MarkdownTagEnum.CODE_MULTILINE]?: string;
    [MarkdownEnums.MarkdownTagEnum.QUOTE]?: string;
    [MarkdownEnums.MarkdownTagEnum.LIST_ITEM]?: string;
    [MarkdownEnums.MarkdownTagEnum.TEXT_STYLE_LIST]?: string;
    [MarkdownEnums.MarkdownClassEnum.BACKSLASH]?: string;
};

export type SimbolOptions = {
    [MarkdownEnums.MarkdownSymbolEnum.H1]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.H2]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.H3]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.H4]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.H5]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.H6]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.ITALIC]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.BOLD]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.UNDERLINED]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.STRIKETHROUGH]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.UNORDERED_LIST]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.ORDERED_LIST]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.LINK]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.IMAGE]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.CODE]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.CODE_MULTILINE]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.QUOTE]?: string | RegExp;
    [MarkdownEnums.MarkdownSymbolEnum.TEXT_STYLE_LIST]?: string | RegExp;
    [MarkdownEnums.MarkdownTagEnum.BACKSLASH]?: string | RegExp;
};

export type MarkdownConfig = {
    tags?: TagChangeOptions;
    classes?: ClassOptions;
    simbol_start?: SimbolOptions;
    simbol_end?: SimbolOptions;
    input?: string;
};

export type MarkdownElement = {
    tag: string;
    tagItem?: string;
    class: string;
    elemnts: MarkdownElement[];
    end: boolean;
    endSimbol: string | RegExp;
};

export type MapMarkdownElement = Record<string, () => MarkdownElement>;
