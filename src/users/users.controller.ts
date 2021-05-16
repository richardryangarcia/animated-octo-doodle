import { Controller, Post, Body, HttpCode, Res, Get, UseGuards, Param, Req } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { AuthenticateUserDto } from './users.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './users.entity';

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
      res.set("Authorization","Bearer " + token);
      res.send()
    }

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard())
    userDetails(@Req() req): Promise<User> {
      return this.usersService.getUserDetails(req.user.id);
    }
}
