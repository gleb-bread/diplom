import { useProjectStore } from '@/app/stores/project';

export const __start__ = async function () {
    await setUserProjects();
};

export const setUserProjects = async function () {
    const projectStore = useProjectStore();

    await projectStore.setUserProjects();
};
