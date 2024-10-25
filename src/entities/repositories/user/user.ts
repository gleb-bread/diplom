import * as DTOs from "@/entities/DTOs";
import * as Repositories from "@/entities/repositories";
import * as UserRepositoryError from './error';

export class User extends Repositories.ARepository.ARepository {
  constructor(
    config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig,
  ) {
    super("/api/users", config);
  }

  public async addUser() {
    this.URL = 'api/register';

    return this.POST<DTOs.UserAuth.UserAuthDTO>().then(response => {
        return this.generateResponseSuccess<DTOs.UserAuth.UserAuthDTO>(
            {
                'response': response,
            }
        );
    }).catch(response => {
        return this.generateResponseError<UserRepositoryError.ErrorEmail>(
            {
                'response': response,
            }
        );
    })
  }
}
