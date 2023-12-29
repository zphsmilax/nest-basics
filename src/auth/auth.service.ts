import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto } from './dto/signin-dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(signUpDto: CreateAuthDto) {
    const passwordHash = await argon.hash(signUpDto.password);
    console.log(passwordHash);
    const user = await this.prisma.user.create({
      data: {
        ...signUpDto,
        password: passwordHash,
      },
    });
    return {
      status: 'success',
      data: user,
    };
  }

  async signin(signInDto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: signInDto.email,
      },
    });
    if (!user) {
      throw new NotFoundException('Not found user');
    }

    const confirmPassword = await argon.verify(user.password , signInDto.password)

    if(!confirmPassword){
        throw new UnauthorizedException('not authorized')
    }

    return {
      status : 'success',
      data : 'allowed this user '

    }
  }
}
