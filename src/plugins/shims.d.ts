import { STYLE_VARIBLES } from '@/plugins/varibles/style/varibles';
import { WORDS } from '@/app/lang/type';
import { GlobalProperties } from './globalProperties.enum';
import { Helper } from '@/shared/helpers';
import { Actions } from '@/shared/managers/actions/actions';
import { AMarkdown } from '@/shared/helpers/markdown/AMarkdown';

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        [GlobalProperties.$STYLE_VARIBLES]: typeof STYLE_VARIBLES;
        [GlobalProperties.$WORDS]: WORDS;
        [GlobalProperties.$HELPER]: typeof Helper;
        [GlobalProperties.$ACTION_MANAGER]: Actions;
        [GlobalProperties.$MARKDOWN]: AMarkdown;
    }
}
