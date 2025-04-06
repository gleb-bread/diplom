import { useProjectStore } from '@/app/stores/project';
import { useProjectElements } from '@/app/stores/projectElements';
import { useComponentStore } from '@/app/stores/components';

export const __start__ = async function () {
    await setProjects();
    await setStructure();
    await setComponents();
    await setUserProjects();
};

export const setProjects = async function () {
    const projectStore = useProjectStore();

    await projectStore.setProject();
};

export const setStructure = async function () {
    const pageStore = useProjectElements();

    await pageStore.setStructure();
};

export const setComponents = async function () {
    const componentStore = useComponentStore();

    await componentStore.setComponents();
};

export const setUserProjects = async function () {
    const projectStore = useProjectStore();

    await projectStore.setUserProjects();
};
