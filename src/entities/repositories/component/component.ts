import * as Repositories from '@/entities/repositories';
import * as DTOs from '@/entities/DTOs';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import * as Types from '@/shared/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';

export class Component extends Repositories.ARepository.ARepositorySecurity {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.V1}/component`, config);
    }

    public async update() {
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

    public async createApiComponentParam() {
        return this.POST<
            ARepositoryTypes.ServerResponse<Types.Component.AnyApiComponentDataDTO>
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

    public async deleteApiComponentParam() {
        return this.DELETE<ARepositoryTypes.ServerResponse<null>>()
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

    public async updateApiComponentParam() {
        return this.PATCH<
            ARepositoryTypes.ServerResponse<Types.Component.AnyApiComponentDataDTO>
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

    public async testApiComponent() {
        return this.POST<
            ARepositoryTypes.ServerResponse<Types.Component.AnyComponentDTO>
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
