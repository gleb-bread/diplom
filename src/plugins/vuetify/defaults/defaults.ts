import { AliasesUI } from '../aliases/aliases.enum';

export const Default: {
    [key: string]: undefined | Record<string, unknown>;
    global?: Record<string, unknown>;
} = {
    [AliasesUI.DesktopMenuList]: {
        class: ['desktop-menu-list'],
    },
    [AliasesUI.DesktopMenuListItem]: {
        class: ['desktop-menu-list-item'],
        link: true,
    },
    [AliasesUI.OutlinedTextField]: {
        variant: 'outlined',
        density: 'compact',
    },
    [AliasesUI.OutlinedBtn]: {
        variant: 'outlined',
        density: 'compact',
        class: ['text-body-2'],
    },
    [AliasesUI.DefaultBtn]: {
        variant: 'tonal',
        color: 'primary',
        density: 'compact',
        class: ['text-body-2'],
    },
    [AliasesUI.NavigationProject]: {
        width: 290,
        color: 'background',
        VList: {
            class: 'px-2',
            VListGroup: {
                VListItem: {
                    rounded: 'lg',
                    link: true,
                    minHeight: 20,
                },
            },
        },
    },
    [AliasesUI.NavigatorList]: {
        bgColor: 'background',
        VListItem: {
            class: ['font-xs'],
            color: 'background',
            link: true,
            minHeight: 20,
        },
    },

    [AliasesUI.NavigatorCard]: {
        color: 'background',
        elevation: 1,
        VList: {
            VListItem: {
                rounded: 'lg',
                minHeight: 10,
            },
        },
    },
};
