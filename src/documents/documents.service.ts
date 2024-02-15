import { Injectable } from "@nestjs/common";
import { Prisma, Documents } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return "Hello World!";
  }

  async getAll(): Promise<Documents[]> {
    return this.prisma.documents.findMany({});
  }

  async createPost(data: Prisma.DocumentsCreateInput): Promise<Documents> {
    return this.prisma.documents.create({
      data,
    });
  }

  async updatePost(
    publicId: string,
    data: Prisma.DocumentsUpdateInput
  ): Promise<Documents> {
    return this.prisma.documents.update({
      where: {
        publicId: publicId,
      },
      data: data,
    });
  }
}
