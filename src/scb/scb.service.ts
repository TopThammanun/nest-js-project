import { Injectable } from "@nestjs/common";
import { Prisma, TestScb } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ScbService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return "Scb Check!";
  }

  async createCheck(data: Prisma.TestScbCreateInput): Promise<TestScb> {
    return this.prisma.testScb.create({
      data,
    });
  }
}
