import * as Models from "@/entities/models";
import * as DTOs from "@/entities/DTOs";

export class User extends Models.Model<DTOs.User.UserDTO> {
  private _id: number;
  private _login: string;
  private _email: string;
  private _name: string | null;
  private _second_name: string | null;
  private _patronymic: string | null;
  private _delayed: boolean;
  private _created_at: string | null;
  private _updated_at: string | null;
  private _password: string;

  constructor(dto: DTOs.User.UserDTO) {
    super();
    this._id = dto.id;
    this._login = dto.login;
    this._email = dto.email;
    this._name = dto.name;
    this._second_name = dto.second_name;
    this._patronymic = dto.patronymic;
    this._delayed = dto.delayed ? true : false;
    this._created_at = dto.created_at;
    this._updated_at = dto.updated_at;
    this._password = dto.password;
  }

  public getDTO(): DTOs.User.UserDTO {
    return {
      id: this._id,
      login: this._login,
      email: this._email,
      name: this._name,
      second_name: this._second_name,
      patronymic: this._patronymic,
      delayed: this._delayed ? 1 : 0,
      created_at: this._created_at,
      updated_at: this._updated_at,
      password: this._password,
    };
  }

  public get id() {
    return  this._id;
  };

  public get login() {
    return  this._login;
  };

  public set login(value: string) {
    this._login = value;
  };

  public get email() {
    return  this._email;
  };

  public set email(value: string) {
    this._email = value;
  };

  public get name() {
    return  this._name ?? '';
  };

  public set name(value: string){
    this._name = value;
  }

  public get second_name() {
    return  this._second_name ?? '';
  };

  public set second_name(value: string){
    this._second_name = value;
  }

  public get patronymic() {
    return  this._patronymic ?? '';
  };

  public set patronymic(value: string){
    this._patronymic = value;
  }

  public get delayed() {
    return  this._delayed;
  };

  public get created_at() {
    return  this._created_at;
  };

  public get updated_at() {
    return  this._updated_at;
  };

  public get password(){
    return this._password;
  }

  public set password(value: string){
    this._password = value;
  }

}
