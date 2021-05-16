import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateUserDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { EmployersRepository } from 'src/employers/employees.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private usersRepository: UserRepository,
        @InjectRepository(EmployersRepository)
        private employersRepository: EmployersRepository,
        private jwtService: JwtService
      ) {}

    async userSignUp(authenticateUserDto: AuthenticateUserDto): Promise<void> {
        const {email, password} = authenticateUserDto;
        const employerId = await this.getEmployerIdFromEmail(email);
        const salt = await bcrypt.genSalt();
        const encryptedPassword = await this.hashPassword(password, salt);

        return this.usersRepository.createUser(email, encryptedPassword, salt, employerId)
    }

    async userSignIn(authenticateUserDto: AuthenticateUserDto): Promise<string> {
        const {email, password} = authenticateUserDto;

        const user = await this.usersRepository.findOne({email})

        if (!user || !await user.validatePassword(password)){
            throw new UnauthorizedException("Invalid User Credentials");
        } 
        const payload: JwtPayload = {id: user.id}

        const jwt = await this.jwtService.sign(payload)
        
        return jwt;
    }

    private async getEmployerIdFromEmail(email:string): Promise<number> {
        const emailParts = email.split("@")
        if (emailParts.length === 2) {
            const domain = emailParts[1];
            try {
                const employer = await this.employersRepository.findOne({domain})
                return employer.id;
            } catch (e) {
                throw new Error("Repository error: no valid employer from domain")
            }
        } else {
            throw new Error("Invalid email format");
        }
    }

    private async hashPassword(password:string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt)
    }
}
