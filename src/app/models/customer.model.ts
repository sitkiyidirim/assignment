import { Role } from "./role.enum";

export class UserModel {
    id: number | undefined;
    username:string="";
    password:string="";
    hotel_id : number=3;
    token_val:string="";
    role:Role=Role.CUSTOMER;
}