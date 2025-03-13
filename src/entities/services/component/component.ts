import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import * as ServiceTypes from '@/entities/services/Service/types';
import { Helper } from '@/shared/helpers';
import type { UnwrapRef } from 'vue';

export class Component extends Service {
    constructor() {
        super();
    }

    public async update(
        component: Models.Component | UnwrapRef<Models.Component>
    ) {
        const repository = new Repositories.Component({
            payload: component.getDTO(),
        });

        const response = await repository.update(component.id);

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
}
