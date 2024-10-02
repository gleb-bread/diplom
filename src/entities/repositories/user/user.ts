import * as DTOs from "@/entities/DTOs";
import * as Repositories from "@/entities/repositories";

export class User extends Repositories.ARepository.ARepository {
  constructor(
    config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig,
  ) {
    super("/api/users", config);
  }

  public async addUser() {
    this.URL = '/api/register';

    return this.POST().then(response => {
        return this.generateResponse<DTOs.UserAuth.UserAuthDTO>(
            {
                'response': response,
            }
        );
    }).catch(response => {
        return this.generateResponse<DTOs.UserAuth.UserAuthDTO>(
            {
                'response': response,
            }
        );
    })
  }
}
