import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type {Response} from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import { Helper } from '@/shared/helpers';
import type { UnwrapRef } from 'vue';

export class User extends Service{
    constructor(){
        super();
    }

    public async addUser(user: Models.User | UnwrapRef<Models.User>): Promise<Response<Models.UserAuth>>{
        const repository = new Repositories.User({payload: user.getDTO()});

        const response = await repository.addUser();

        return new Promise((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const userDTO = response.response.data;
                    const user = DTOs.UserAuth.toModel(userDTO);
                    const tokenResponse = new Response(user.token);

                    await Helper.CacheAPI.setCacheData('token', '/', tokenResponse);

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: user,
                    });
                },

                error: (response) => {
                    resolve({
                        status: response.status,
                        result: response.result,
                        data: {} as Models.UserAuth,
                    });
                },
            });
        });
    }
}