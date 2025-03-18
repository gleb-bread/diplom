import { AliasesUI } from './aliases.enum';
import * as Components from 'vuetify/components';

export interface IAliases {
    [AliasesUI.DesktopMenuList]: typeof Components.VList;
    [AliasesUI.DesktopMenuListItem]: typeof Components.VListItem;
    [AliasesUI.OutlinedTextField]: typeof Components.VTextField;
    [AliasesUI.OutlinedBtn]: typeof Components.VBtn;
    [AliasesUI.DefaultBtn]: typeof Components.VBtn;
    [AliasesUI.NavigationProject]: typeof Components.VNavigationDrawer;
    [AliasesUI.NavigatorList]: typeof Components.VList;
    [AliasesUI.NavigatorCard]: typeof Components.VCard;
}

export const Aliases: IAliases = {
    [AliasesUI.DesktopMenuList]: Components.VList,
    [AliasesUI.DesktopMenuListItem]: Components.VListItem,
    [AliasesUI.OutlinedTextField]: Components.VTextField,
    [AliasesUI.OutlinedBtn]: Components.VBtn,
    [AliasesUI.DefaultBtn]: Components.VBtn,
    [AliasesUI.NavigationProject]: Components.VNavigationDrawer,
    [AliasesUI.NavigatorList]: Components.VList,
    [AliasesUI.NavigatorCard]: Components.VCard,
};
