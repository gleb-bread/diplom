import * as Models from '@/entities/models';

export type UserDTO = {
  id: number;
  login: string;
  email: string;
  name: string | null;
  second_name: string | null;
  patronymic: string | null;
  delayed: number;
  created_at: string | null;
  updated_at: string | null;
  password: string;
};

export const toModel = function (dto: UserDTO) {
    return new Models.User(dto);
};
