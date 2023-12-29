import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UserService {
  
  constructor(private prisma : PrismaService){}
  create(createUserDto: CreateUserDto) {
    return {data : createUserDto}
  }

  async findAll() {
    const data = await this.prisma.user.findMany({})
    return {data : data };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
