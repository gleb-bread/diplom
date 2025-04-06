import * as Models from '@/entities/models';
import { initState } from './state';
import * as Types from '@/shared/types';
import { useProjectElements } from '../projectElements';

export const getNewElement = function (state: ReturnType<typeof initState>) {
    const projectElements = useProjectElements();

    const newElement = new Models.TextComponent({
        created_at: '',
        id: state.lastIndexNewComponent.value,
        page_id:
            projectElements.getElements[projectElements.getSelectPage].id ?? 0,
        text: '',
        updated_at: '',
        type: Types.Component.Types.TEXT,
    });

    return newElement;
};
