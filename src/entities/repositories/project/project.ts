import * as Repositories from '@/entities/repositories';
import * as DTOs from '@/entities/DTOs';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import { PREFIX } from '@/entities/repositories/prefix.enum';

export class Project extends Repositories.ARepository.ARepositorySecurity {
    constructor(
        config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
    ) {
        super(`${PREFIX.V1}/project`, config);
    }

    public async getPages(id: number) {
        this.addParamsInConfig({ id: id, path: 'pages' });

        return this.GET<ARepositoryTypes.ServerResponse<DTOs.Page.PageDTO[]>>()
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
}
