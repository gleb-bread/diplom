import { STYLE_VARIBLES } from '@/plugins/varibles/style/varibles';
import { WORDS } from '@/app/lang/type';
import { GlobalProperties } from './globalProperties.enum';
import { Helper } from '@/shared/helpers';
import { Actions } from '@/shared/managers/actions/actions';
import { Markdown } from '@/shared/helpers/markdown';

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        [GlobalProperties.$STYLE_VARIBLES]: typeof STYLE_VARIBLES;
        [GlobalProperties.$WORDS]: WORDS;
        [GlobalProperties.$HELPER]: typeof Helper;
        [GlobalProperties.$ACTION_MANAGER]: Actions;
        [GlobalProperties.$MARKDOWN]: Markdown;
    }
}
