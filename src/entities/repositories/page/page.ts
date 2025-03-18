import * as Repositories from '@/entities/repositories';
import * as DTOs from '@/entities/DTOs';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';
import * as Types from '@/shared/types';

export class Page extends Repositories.ARepository.ARepositorySecurity {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.V1}/pages`, config);
    }

    public async getComponents(id: number) {
        this.addParamsInConfig({ id: id, path: 'components' });

        return this.GET<
            ARepositoryTypes.ServerResponse<Types.Component.AnyComponentDTO[]>
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

    public async createComponent() {
        this.addParamsInConfig({ path: 'component' });

        return this.POST<
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
