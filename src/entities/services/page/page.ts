import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import * as ServiceTypes from '@/entities/services/Service/types';
import { Component } from '@/entities/models/component';
import * as Types from '@/shared/types';
import type { UnwrapRef } from 'vue';

export class Page extends Service {
    constructor() {
        super();
    }

    public async getComponents(pageId: number) {
        const repository = new Repositories.Page();

        const response = await repository.getComponents(pageId);

        return new Promise<
            Response<
                ServiceTypes.GenericList<Types.Component.AnyComponentModel>
            >
        >((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const componentDTOs = response.response.data.data;
                    const components = componentDTOs.map(
                        Component.createFromDTO
                    );

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: {
                            entities: this.getCacheObject(components, 'id'),
                            genericList: this.getIndexList(components, 'id'),
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

    public async createComponent(
        component: Models.Component | UnwrapRef<Models.Component>
    ) {
        const repository = new Repositories.Page({
            payload: component.getDTO(),
        });

        const response = await repository.createComponent();

        return new Promise<Response<Models.Component>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const componentDTO = response.response.data.data;
                    const component = DTOs.Component.toModel(componentDTO);

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: component,
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
