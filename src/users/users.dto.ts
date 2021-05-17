import { Roles } from '../roles/roles.entity';
import { Buildings } from '../buildings/buildings.entity';
import { User } from './users.entity';

export class AuthenticateUserDto {
    email: string;
    password: string;
}

export class UserDetailsDto {
    user: User;
    buildings: Buildings[]
}

  