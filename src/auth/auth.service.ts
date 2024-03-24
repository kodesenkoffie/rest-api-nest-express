import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SignUpDto } from './dto/sign-up-dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaClient) {}

  async signup(reqData: SignUpDto) {
    return this.prisma.user.create({
      data: reqData,
    });
  }
}
