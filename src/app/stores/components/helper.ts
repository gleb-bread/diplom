import * as Models from '@/entities/models';
import { initState } from './state';

export const getNewElement = function (state: ReturnType<typeof initState>) {
    const newElement = new Models.TextComponent({
        created_at: '',
        id: state.lastIndexNewComponent.value,
        page_id: state.selectPage.value,
        text: '',
        updated_at: '',
    });

    return newElement;
};
