import { initState } from './state';
import * as Types from '@/shared/types';
import { useProjectElements } from '../projectElements';
import { Helper as GeneralHelper } from '@/shared/helpers';
import type { UnwrapRef } from 'vue';

export const StoreHelper = function (state: ReturnType<typeof initState>) {
    const projectElements = useProjectElements();

    const addProjectElementInGenericList = function (
        element: Types.Project.AnyProjectModels
    ) {
        projectElements.getElements[element.public_id] = element;

        if (element.type === Types.Project.ElementTypes.PAGE) {
            if (element.folder_id) {
                const folder =
                    projectElements.getElements[`folder_${element.folder_id}`];

                if (folder.type === Types.Project.ElementTypes.FOLDER) {
                    folder.unshiftItem(element);
                } else {
                    setFirstLevelElement(element);
                }
            } else {
                setFirstLevelElement(element);
            }
        }

        if (element.type === Types.Project.ElementTypes.FOLDER) {
            if (element.parent_id) {
                const folder =
                    projectElements.getElements[`folder_${element.parent_id}`];

                if (folder.type === Types.Project.ElementTypes.FOLDER) {
                    folder.unshiftItem(element);
                } else {
                    setFirstLevelElement(element);
                }
            } else {
                setFirstLevelElement(element);
            }
        }
    };

    const setFirstLevelElement = function (
        element: Types.Project.AnyProjectModels
    ) {
        const elementsIds = [
            ...projectElements.getGenericList,
            element.public_id,
        ];

        const FirstLevelElements = getListProjectElements(elementsIds);

        const genericList =
            GeneralHelper.ProjectElementsAPI.getIndexListWithGroupedAlphabeticalSorting(
                FirstLevelElements,
                'public_id',
                'name'
            );

        projectElements.setGenericList(genericList);
    };

    const getListProjectElements = function (list: string[]) {
        let array: Types.Project.AnyProjectModels[] = [];

        list.forEach((itemId) => {
            const item = projectElements.getElements[itemId];
            array.push(item);
        });

        return array;
    };

    const updateProjectElement = function (
        element: Types.Project.AnyProjectModels
    ) {
        projectElements.getElements[element.id] = element;

        let folder_id: number = 0;

        if (element.type === Types.Project.ElementTypes.PAGE) {
            folder_id = element.folder_id ?? 0;
        }

        if (element.type === Types.Project.ElementTypes.FOLDER) {
            folder_id = element.parent_id ?? 0;
        }

        if (folder_id) {
            const folder = projectElements.getElements[`folder_${folder_id}`];

            if (folder.type === Types.Project.ElementTypes.FOLDER) {
                const itemIndex = folder.items.findIndex(
                    (item) => item.public_id === element.public_id
                );
                if (itemIndex != -1) {
                    folder.items[itemIndex] = element;
                }
            }
        }
    };

    const deleteProjectElement = function (
        element:
            | Types.Project.AnyProjectModels
            | UnwrapRef<Types.Project.AnyProjectModels>
    ) {
        let folder_id: number = 0;

        if (element.type === Types.Project.ElementTypes.PAGE) {
            folder_id = element.folder_id ?? 0;
        }

        if (element.type === Types.Project.ElementTypes.FOLDER) {
            folder_id = element.parent_id ?? 0;
        }

        if (folder_id) {
            const folder = projectElements.getElements[`folder_${folder_id}`];

            if (folder.type === Types.Project.ElementTypes.FOLDER) {
                const itemIndex = folder.items.findIndex(
                    (item) => item.public_id === element.public_id
                );
                if (itemIndex != -1) {
                    folder.items.splice(itemIndex, 1);
                }
            }
        }

        const newGenericList = projectElements.getGenericList.filter(
            (itemId) => itemId !== element.public_id
        );
        projectElements.setGenericList(newGenericList);
        delete projectElements.getElements[element.public_id];
    };

    return {
        addProjectElementInGenericList,
        updateProjectElement,
        deleteProjectElement,
    };
};
