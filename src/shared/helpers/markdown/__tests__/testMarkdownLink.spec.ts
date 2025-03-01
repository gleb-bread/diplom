import { describe, it, expect } from 'vitest';
import { DefaultMarkdown } from '../defaultMarkdown';

describe('Markdown Parser Link', () => {
    const parser = new DefaultMarkdown();
    it('должен преобразовывать текст в ссылку', () => {
        expect(parser.getHTML('[Привет мир!](https://example)')).toBe(
            '<a class="diplim_link" href="https://example">Привет мир!</a>'
        );
    });
});
