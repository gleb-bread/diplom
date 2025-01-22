import * as Repositories from '@/entities/repositories';
import * as DTOs from '@/entities/DTOs';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';

export class Page extends Repositories.ARepository.ARepositorySecurity {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.V1}/pages`, config);
    }

    public async getComponents(id: number) {
        this.addParamsInConfig({ id: id, path: 'components' });

        return this.GET<
            ARepositoryTypes.ServerResponse<
                DTOs.TextComponent.TextComponentDTO[]
            >
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
