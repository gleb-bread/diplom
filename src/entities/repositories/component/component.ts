import * as Repositories from '@/entities/repositories';
import * as DTOs from '@/entities/DTOs';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';

export class Component extends Repositories.ARepository.ARepositorySecurity {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.V1}/component`, config);
    }

    public async update(id: number) {
        this.addParamsInConfig({ id: id });

        return this.PATCH<
            ARepositoryTypes.ServerResponse<DTOs.Component.ComponentDTO>
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
