import { Controller, Post, Get, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.createUser(createUserDto);
  }

  @Get('latest')
  async getLatestUser(): Promise<any> {
    return this.userService.getLatestUser();
  }
}
