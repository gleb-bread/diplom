import * as DTOs from '@/entities/DTOs';
import * as Repositories from '@/entities/repositories';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';

export class User extends Repositories.ARepository.ARepositorySecurity {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.V1}/user`, config);
    }

    public async getUser(id: number) {
        this.addParamsInConfig({ id: id });

        return this.GET<ARepositoryTypes.ServerResponse<DTOs.User.UserDTO>>()
            .then((response) => {
                return this.generateResponseSuccess({
                    response: response,
                });
            })
            .catch((response) => {
                return this.generateResponseError({
                    response: response,
                });
            });
    }
}
