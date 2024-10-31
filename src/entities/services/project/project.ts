import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import * as ServiceTypes from '@/entities/services/Service/types';
import type { UnwrapRef } from 'vue';

export class Project extends Service {
    constructor() {
        super();
    }

    public async getPages(idProject: number) {
        const repository = new Repositories.Project();

        const response = await repository.getPages(idProject);

        return new Promise<Response<ServiceTypes.GenericList<Models.Page>>>(
            (resolve, reject) => {
                this.validateRequest({
                    response: response,

                    success: async (response) => {
                        const pageDTOs = response.response.data.data;
                        const pages = pageDTOs.map(DTOs.Page.toModel);

                        resolve({
                            status: response.status,
                            result: response.result,
                            data: {
                                entities: this.getCacheObject(pages, 'id'),
                                genericList: this.getIndexList(pages, 'id'),
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
}
