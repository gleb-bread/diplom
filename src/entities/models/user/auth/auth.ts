import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';

export class UserAuth extends Models.Model<DTOs.UserAuth.UserAuthDTO> {

    private _token: string;
    private _user: Models.User;

    constructor(dto: DTOs.UserAuth.UserAuthDTO){
        super();
        this._token = dto.token;
        this._user = DTOs.User.toModel(dto);
    }

    public getDTO(): DTOs.UserAuth.UserAuthDTO{
        return {
            ...this._user.getDTO(),
            token: this._token
        }
    }

    public get user(){
        return this._user;
    }

    public get token(){
        return this._token;
    }
}