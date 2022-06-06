export class User {
    private _email: string;
    private _roles: String[];

    constructor(user:any){
        this._email = user.email;
        this._roles = user.roles;
    }

    public get email(){
        return this._email;
    }


    public get roles(){
        return this._roles;
    }

}