import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import * as ServiceTypes from '@/entities/services/Service/types';
import type { UnwrapRef } from 'vue';
import * as Types from '@/shared/types';
import * as ServiceHelper from './helper';
import { Helper } from '@/shared/helpers';

export class Project extends Service {
    constructor() {
        super();
    }

    public async getStructure(idProject: number) {
        const repository = new Repositories.Project();

        const response = await repository.getStructure(idProject);

        return new Promise<
            Response<
                ServiceTypes.GenericStringList<Types.Project.AnyProjectModels>
            >
        >((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const structureDTOs = response.response.data.data;
                    const structure = structureDTOs.map(
                        Models.ProjectElement.createFromDTO
                    );

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: {
                            entities: ServiceHelper.getCacheObject(
                                structure,
                                'public_id'
                            ),
                            genericList:
                                Helper.ProjectElementsAPI.getIndexListWithGroupedAlphabeticalSorting(
                                    structure,
                                    'public_id',
                                    'name'
                                ),
                        },
                    });
                },

                error: (response) => {
                    reject({
                        status: response.status,
                        result: response.result,
                        data: response,
                    });
                },
            });
        });
    }

    public async createProject(
        project: Models.CreateProject | UnwrapRef<Models.CreateProject>
    ) {
        const repository = new Repositories.Project({
            payload: project.getDTO(),
        });

        const response = await repository.createProject();

        return new Promise<Response<Models.Project>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const projectDTO = response.response.data.data;
                    const project = DTOs.Project.toModel(projectDTO);

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: project,
                    });
                },

                error: (response) => {
                    reject({
                        status: response.status,
                        result: response.result,
                        data: response,
                    });
                },
            });
        });
    }

    public async updateProject(
        project: Models.Project | UnwrapRef<Models.Project>
    ) {
        const repository = new Repositories.Project({
            payload: project.getDTO(),
            id: project.id,
        });

        const response = await repository.updateProject();

        return new Promise<Response<Models.Project>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const projectDTO = response.response.data.data;
                    const project = DTOs.Project.toModel(projectDTO);

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: project,
                    });
                },

                error: (response) => {
                    reject({
                        status: response.status,
                        result: response.result,
                        data: response,
                    });
                },
            });
        });
    }

    public async getProject(projectId: number) {
        const repository = new Repositories.Project();

        const response = await repository.getProject(projectId);

        return new Promise<Response<Models.Project>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const projectDTO = response.response.data.data;
                    const project = DTOs.Project.toModel(projectDTO);

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: project,
                    });
                },

                error: (response) => {
                    reject({
                        status: response.status,
                        result: response.result,
                        data: response,
                    });
                },
            });
        });
    }

    public async getUserProjects() {
        const repository = new Repositories.Project();

        const response = await repository.getUserProjects();

        return new Promise<Response<ServiceTypes.GenericList<Models.Project>>>(
            (resolve, reject) => {
                this.validateRequest({
                    response: response,

                    success: async (response) => {
                        const projectsDTO = response.response.data.data;
                        const project = projectsDTO.map(DTOs.Project.toModel);

                        resolve({
                            status: response.status,
                            result: response.result,
                            data: {
                                entities: this.getCacheObject(project, 'id'),
                                genericList: this.getIndexList(project, 'id'),
                            },
                        });
                    },

                    error: (response) => {
                        reject({
                            status: response.status,
                            result: response.result,
                            data: response,
                        });
                    },
                });
            }
        );
    }

    public async createProjectElement(
        payload:
            | Models.ProjectCreateElement
            | UnwrapRef<Models.ProjectCreateElement>
    ) {
        const repository = new Repositories.Project({
            payload: payload.getDTO(),
        });

        const response = await repository.createElement();

        return new Promise<Response<Types.Project.AnyProjectModels>>(
            (resolve, reject) => {
                this.validateRequest({
                    response: response,

                    success: async (response) => {
                        const projectElementDTO = response.response.data.data;
                        const element =
                            Models.ProjectElement.createFromDTO(
                                projectElementDTO
                            );

                        resolve({
                            status: response.status,
                            result: response.result,
                            data: element,
                        });
                    },

                    error: (response) => {
                        reject({
                            status: response.status,
                            result: response.result,
                            data: response,
                        });
                    },
                });
            }
        );
    }

    public async updateProjectElement(
        payload:
            | Types.Project.AnyProjectModels
            | UnwrapRef<Types.Project.AnyProjectModels>
    ) {
        const repository = new Repositories.Project({
            payload: payload.getDTO(),
        });

        const response = await repository.updateElement();

        return new Promise<Response<Types.Project.AnyProjectModels>>(
            (resolve, reject) => {
                this.validateRequest({
                    response: response,

                    success: async (response) => {
                        const projectElementDTO = response.response.data.data;
                        const element =
                            Models.ProjectElement.createFromDTO(
                                projectElementDTO
                            );

                        resolve({
                            status: response.status,
                            result: response.result,
                            data: element,
                        });
                    },

                    error: (response) => {
                        reject({
                            status: response.status,
                            result: response.result,
                            data: response,
                        });
                    },
                });
            }
        );
    }

    public async deleteProjectElement(
        payload:
            | Types.Project.AnyProjectModels
            | UnwrapRef<Types.Project.AnyProjectModels>
    ) {
        const repository = new Repositories.Project({
            payload: payload.getDTO(),
        });

        const response = await repository.deleteElement();

        return new Promise<Response<null>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const data = response.response.data.data;

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: data,
                    });
                },

                error: (response) => {
                    reject({
                        status: response.status,
                        result: response.result,
                        data: response,
                    });
                },
            });
        });
    }
}
