export type ClassOptions = {
    font: string | null;
    default: string | null;
    h1: string | null;
    h2: string | null;
    h3: string | null;
    h4: string | null;
    h5: string | null;
    h6: string | null;
    italic: string | null;
    bold: string | null;
    underlined: string | null;
    strikethrough: string | null;
    unordered_list: string | null;
    ordered_list: string | null;
    link: string | null;
    link_with_title: string | null;
    image: string | null;
    image_with_title: string | null;
    inline_code: string | null;
    code_block: string | null;
    quote: string | null;
    horizontal_line: string | null;
    task_list: string | null;
    task_list_item: string | null;
    text_style_list: string | null;
};

export type TagChangeOptions = Omit<TagOptions, 'text_style_list'>;

export type TagOptions = {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    italic?: string;
    bold?: string;
    underlined?: string;
    strikethrough?: string;
    unordered_list?: string;
    ordered_list?: string;
    link?: string;
    image?: string;
    code?: string;
    quote?: string;
    list_item?: string;
    text_style_list?: string;
};

export type SimbolOptions = {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    italic?: string;
    bold?: string;
    underlined?: string;
    strikethrough?: string;
    unordered_list?: string;
    ordered_list?: string;
    link?: string;
    image?: string;
    code?: string;
    quote?: string;
    list_item?: string;
    text_style_list?: string;
};
