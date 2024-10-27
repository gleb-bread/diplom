import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import { Helper } from '@/shared/helpers';
import type { UnwrapRef } from 'vue';

export class User extends Service {
    constructor() {
        super();
    }

    public async addUser(user: Models.User | UnwrapRef<Models.User>) {
        const repository = new Repositories.Registration({
            payload: user.getDTO(),
        });

        const response = await repository.addUser();

        return new Promise<Response<Models.UserAuth>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const userDTO = response.response.data.data;
                    const user = DTOs.UserAuth.toModel(userDTO);
                    const token = user.token;

                    Helper.CookieAPI.setCookie('token', token, 14, {
                        path: '/',
                        sameSite: 'Strict',
                    });

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: user,
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

    public async getUser(id: number) {
        const repository = new Repositories.User();

        const response = await repository.getUser(id);

        return new Promise<Response<Models.User>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const userDTO = response.response.data.data;
                    const user = DTOs.User.toModel(userDTO);

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: user,
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
