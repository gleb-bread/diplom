import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export type UserAuthDTO  = {
    token: string;
} & DTOs.User.UserDTO;

export const toModel = function (dto: UserAuthDTO) {
    return new Models.UserAuth(dto);
};
