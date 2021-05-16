import { Controller, Post, Body, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { AuthenticateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup')
    @HttpCode(201)
    userSignUp(@Body() authenticateUserDto: AuthenticateUserDto): Promise<void> {
      return this.usersService.userSignUp(authenticateUserDto);
    }

    @Post('/signin')
    @HttpCode(200)
    async userSignIn(@Body() authenticateUserDto: AuthenticateUserDto, @Res() res: Response): Promise<void> {
      const token = await this.usersService.userSignIn(authenticateUserDto);
      res.set("Authorization",token);
      res.send()
    }
}
