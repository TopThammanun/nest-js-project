import { Injectable } from "@nestjs/common";
import { Prisma, pwaTest } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class pwaTestService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return "pwaTest Check!";
  }

  async create(data: Prisma.pwaTestCreateInput): Promise<pwaTest> {
    return this.prisma.pwaTest.create({
      data,
    });
  }

  async getAll(): Promise<pwaTest[]> {
    return this.prisma.pwaTest.findMany({});
  }
}
