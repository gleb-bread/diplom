import * as Repositories from '@/entities/repositories';
import * as DTOs from '@/entities/DTOs';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';
import * as Types from '@/shared/types';

export class Project extends Repositories.ARepository.ARepositorySecurity {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.V1}/project`, config);
    }

    public async getStructure(id: number) {
        this.addParamsInConfig({ id: id, path: 'structure' });

        return this.GET<
            ARepositoryTypes.ServerResponse<Types.Project.AnyProjectElement[]>
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

    public async addProject(project: DTOs.Project.ProjectDTO) {
        this.addParamsInConfig({ payload: project });

        return this.POST<
            ARepositoryTypes.ServerResponse<DTOs.Project.ProjectDTO>
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

    public async getProject(id: number) {
        this.addParamsInConfig({ id: id });

        return this.GET<
            ARepositoryTypes.ServerResponse<DTOs.Project.ProjectDTO>
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

    public async createElement() {
        this.addParamsInConfig({ path: 'element' });

        return this.POST<
            ARepositoryTypes.ServerResponse<Types.Project.AnyProjectElement>
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

    public async deleteElement() {
        this.addParamsInConfig({ path: 'element' });

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

    public async updateElement() {
        this.addParamsInConfig({ path: 'element' });

        return this.PATCH<
            ARepositoryTypes.ServerResponse<Types.Project.AnyProjectElement>
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
