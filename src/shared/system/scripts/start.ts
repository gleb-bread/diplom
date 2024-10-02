import * as SystemAuthAPI from '@/shared/system/auth';
import * as SystemLangAPI from '@/shared/system/lang';

export const __start__ = function(){
    SystemAuthAPI.checkAuth();
    SystemLangAPI.getLang();
}