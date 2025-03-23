import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import * as ServiceTypes from '@/entities/services/Service/types';
import type { UnwrapRef } from 'vue';
import * as Types from '@/shared/types';

export class Project extends Service {
    constructor() {
        super();
    }

    public async getStructure(idProject: number) {
        const repository = new Repositories.Project();

        const response = await repository.getStructure(idProject);

        return new Promise<
            Response<
                ServiceTypes.GenericStringList<Types.Project.AnyProjectElement>
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
                            entities: this.getCacheObject(
                                structure,
                                'public_id'
                            ),
                            genericList: this.getIndexList(
                                structure,
                                'public_id'
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

    public async addProject(
        project: Models.Project | UnwrapRef<Models.Project>
    ) {
        const repository = new Repositories.Project();

        const response = await repository.addProject(project.getDTO());

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
}
