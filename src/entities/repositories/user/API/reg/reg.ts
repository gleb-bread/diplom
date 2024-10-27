import * as DTOs from '@/entities/DTOs';
import * as Repositories from '@/entities/repositories';
import * as RegistrationError from './error';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';

export class Registration extends Repositories.ARepository.ARepository {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.API}/register`, config);
    }

    public async addUser() {
        return this.POST<
            ARepositoryTypes.ServerResponse<DTOs.UserAuth.UserAuthDTO>
        >()
            .then((response) => {
                return this.generateResponseSuccess<DTOs.UserAuth.UserAuthDTO>({
                    response: response,
                });
            })
            .catch((response) => {
                return this.generateResponseError<RegistrationError.ErrorEmail>(
                    {
                        response: response,
                    }
                );
            });
    }
}
