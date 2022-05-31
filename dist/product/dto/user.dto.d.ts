import { RoleDto } from "./user-roles.dto";
export declare class UserDto {
    readonly email: string;
    readonly password: string;
    readonly roles: RoleDto[];
}
