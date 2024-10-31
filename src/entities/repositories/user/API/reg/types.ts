import * as DTOs from '@/entities/DTOs';

export type RegistrationDTO = {
    user: DTOs.UserAuth.UserAuthDTO;
    project: DTOs.Project.ProjectDTO;
    page: DTOs.Page.PageDTO;
};
