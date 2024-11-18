export enum MarkdownSymbolEnum {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    ITALIC = 'italic',
    BOLD = 'bold',
    UNDERLINED = 'underlined',
    STRIKETHROUGH = 'strikethrough',
    UNORDERED_LIST = 'unordered_list',
    ORDERED_LIST = 'ordered_list',
    LINK = 'link',
    IMAGE = 'image',
    CODE = 'code',
    CODE_MULTILINE = 'code_multiline',
    QUOTE = 'quote',
    TEXT_STYLE_LIST = 'text_style_list',
    BACKSLASH = 'backslash',
}

enum TagEnum {
    LIST_ITEM = 'list_item',
}

enum ClassEnum {
    FONT = 'font',
    DEFAULT = 'default',
}

export const MarkdownTagEnum = { ...MarkdownSymbolEnum, ...TagEnum };

export const MarkdownClassEnum = {
    ...MarkdownSymbolEnum,
    ...TagEnum,
    ...ClassEnum,
};
