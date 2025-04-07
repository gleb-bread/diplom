import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import * as ServiceTypes from '@/entities/services/Service/types';
import { Helper } from '@/shared/helpers';
import * as Types from '@/shared/types';
import type { UnwrapRef } from 'vue';

export class Component extends Service {
    constructor() {
        super();
    }

    public async update(
        component:
            | Types.Component.AnyComponentModel
            | UnwrapRef<Types.Component.AnyComponentModel>
    ) {
        const repository = new Repositories.Component({
            payload: component.getDTO(),
        });

        const response = await repository.update();

        return new Promise<Response<boolean>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    resolve({
                        status: response.status,
                        result: response.result,
                        data: true,
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

    public async createApiComponentData(
        component:
            | Models.CreateApiComponentData
            | UnwrapRef<Models.CreateApiComponentData>
    ) {
        const repository = new Repositories.Component({
            path: `api-component/${component.type}`,
            payload: component.getDTO(),
        });

        const response = await repository.createApiComponentParam();

        return new Promise<Response<Types.Component.AnyApiComponentDataModel>>(
            (resolve, reject) => {
                this.validateRequest({
                    response: response,

                    success: async (response) => {
                        const apiComponentDataDTO = response.response.data.data;
                        const apiComponentDataModel =
                            Models.ApiComponentData.createFromDTO(
                                apiComponentDataDTO
                            );

                        resolve({
                            status: response.status,
                            result: response.result,
                            data: apiComponentDataModel,
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

    public async deleteApiComponentData(
        component:
            | Types.Component.AnyApiComponentDataModel
            | UnwrapRef<Types.Component.AnyApiComponentDataModel>
    ) {
        const repository = new Repositories.Component({
            path: `api-component/${component.type}/${component.id}`,
            payload: component.getDTO(),
        });

        const response = await repository.deleteApiComponentParam();

        return new Promise<Response<boolean>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    resolve({
                        status: response.status,
                        result: response.result,
                        data: true,
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

    public async updateApiComponentData(
        component:
            | Types.Component.AnyApiComponentDataModel
            | UnwrapRef<Types.Component.AnyApiComponentDataModel>
    ) {
        const repository = new Repositories.Component({
            path: `api-component/${component.type}/${component.id}`,
            payload: component.getDTO(),
        });

        const response = await repository.updateApiComponentParam();

        return new Promise<Response<Types.Component.AnyApiComponentDataModel>>(
            (resolve, reject) => {
                this.validateRequest({
                    response: response,

                    success: async (response) => {
                        const apiComponentDataDTO = response.response.data.data;
                        const apiComponentDataModel =
                            Models.ApiComponentData.createFromDTO(
                                apiComponentDataDTO
                            );

                        resolve({
                            status: response.status,
                            result: response.result,
                            data: apiComponentDataModel,
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
}
