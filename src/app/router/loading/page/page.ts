import { useProjectStore } from '@/app/stores/project';
import { usePageStore } from '@/app/stores/page';
import { useComponentStore } from '@/app/stores/components';

export const __start__ = async function () {
    await setProjects();
    await setPages();
    await setComponents();
};

export const setProjects = async function () {
    const projectStore = useProjectStore();

    await projectStore.setProjects();
};

export const setPages = async function () {
    const pageStore = usePageStore();

    await pageStore.setPages();
};

export const setComponents = async function () {
    const componentStore = useComponentStore();

    await componentStore.setComponents();
};
