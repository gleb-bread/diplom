import * as Models from "@/entities/models";
import * as DTOs from "@/entities/DTOs";

export class User extends Models.Model<DTOs.User.UserDTO> {
  private _id: number;
  private _login: string;
  private _email: string;
  private _name: string | null;
  private _second_name: string | null;
  private _patronymic: string | null;
  private _delayed: number;
  private _created_at: string | null;
  private _updated_at: string | null;

  constructor(dto: DTOs.User.UserDTO) {
    super();
    this._id = dto.id;
    this._login = dto.login;
    this._email = dto.email;
    this._name = dto.name;
    this._second_name = dto.second_name;
    this._patronymic = dto.patronymic;
    this._delayed = dto.delayed;
    this._created_at = dto.created_at;
    this._updated_at = dto.updated_at;
  }

  public getDTO(): DTOs.User.UserDTO {
    return {
      id: this._id,
      login: this._login,
      email: this._email,
      name: this._name,
      second_name: this._second_name,
      patronymic: this._patronymic,
      delayed: this._delayed,
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }
}
