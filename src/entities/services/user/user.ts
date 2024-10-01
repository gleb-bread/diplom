import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type {Response} from '../Service/types';
import * as DTOs from '@/entities/DTOs';

export class User extends Service{
    constructor(){
        super();
    }

    public async addUser(user: Models.User): Promise<Response<Models.User>>{
        const repository = new Repositories.User({payload: user.getDTO()});

        const response = await repository.addUser();

        return new Promise((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: (response) => {
                    const userDTO = response.response.data;
                    const user = DTOs.User.toModel(userDTO);

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
                        data: {} as Models.User,
                    });
                },
            });
        });
    }
}