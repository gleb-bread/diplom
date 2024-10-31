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

    public async getUser() {
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

    public async getProjects() {
        this.addParamsInConfig({ path: 'project' });

        return this.GET<
            ARepositoryTypes.ServerResponse<DTOs.Project.ProjectDTO[]>
        >()
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
