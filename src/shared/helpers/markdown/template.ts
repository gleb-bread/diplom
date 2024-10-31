import * as MarkdownTypes from './types';

export const ClassOptions = function (): MarkdownTypes.ClassOptions {
    return {
        font: null,
        default: 'diplim',
        h1: 'diplim_h1',
        h2: 'diplim_h2',
        h3: 'diplim_h3',
        h4: 'diplim_h4',
        h5: 'diplim_h5',
        h6: 'diplim_h6',
        italic: 'diplim_italic',
        bold: 'diplim_bold',
        underlined: 'diplim_underlined',
        strikethrough: 'diplim_strikethrough',
        unordered_list: 'diplim_unordered_list',
        ordered_list: 'diplim_ordered_list',
        link: 'diplim_link',
        link_with_title: 'diplim_link_with_title',
        image: 'diplim_image',
        image_with_title: 'diplim_image_with_title',
        inline_code: 'diplim_inline_code',
        code_block: 'diplim_code_block',
        quote: 'diplim_quote',
        horizontal_line: 'diplim_horizontal_line',
        task_list: 'diplim_task_list',
        task_list_item: 'diplim_list_item',
        text_style_list: null,
    };
};

export const TagOptions = function (): MarkdownTypes.TagOptions {
    return {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        italic: 'i',
        bold: 'b',
        underlined: 'u',
        strikethrough: 's',
        unordered_list: 'ul',
        ordered_list: 'ol',
        link: 'a',
        image: 'img',
        code: 'code',
        quote: 'blockquote',
        list_item: 'li',
        text_style_list: 'style',
    };
};

// TODO сделаь нормально

export const SimbolOptions = function (): MarkdownTypes.TagOptions {
    return {
        h1: '#',
        h2: '##',
        h3: '###',
        h4: '####',
        h5: '#####',
        h6: '######',
        italic: '*',
        bold: '**',
        underlined: '~~',
        strikethrough: '~~~',
        unordered_list: '-',
        ordered_list: '.',
        link: '[',
        image: '![',
        code: '`',
        quote: '>',
        list_item: '.',
        text_style_list: '>>>',
    };
};
