import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { EmployersRepository } from 'src/employers/employees.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from '../appConfigs/jwt.config';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register(jwtConfig),
    TypeOrmModule.forFeature([UserRepository, EmployersRepository])
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    JwtStrategy
  ],
  exports: [
    JwtStrategy,
    PassportModule
  ]
})
export class UsersModule {}
