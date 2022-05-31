import { RoleDto } from "./user-roles.dto";

export class UserDto {
  readonly email: string;
  readonly password: string;
  readonly roles: RoleDto[];
}
