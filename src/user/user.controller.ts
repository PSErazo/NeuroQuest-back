import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
// import { UpdateUserDto } from './dto/update-user.dto';

// @AuthGuard('')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll(@Body() createUserDto: CreateUserDto) {
  //   const { email, password } = createUserDto
  //   return this.usersService.findOneByEmail(email);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

}
