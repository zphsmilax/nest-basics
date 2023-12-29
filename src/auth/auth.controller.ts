import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInDto } from './dto/signin-dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin (@Body() signInDto : SignInDto){
     return this.authService.signin(signInDto)
  }
  
  @Post('/signup')
  signup (@Body() signUpDto : CreateAuthDto){
      return this.authService.signup(signUpDto)
  }

  
}
