import { Controller, Get, Post, Body, Param, Put } from "@nestjs/common";
import { DocumentsService } from "./documents.service";
import { Prisma } from "@prisma/client";

@Controller("documents")
export class DocumentsController {
  constructor(private readonly docService: DocumentsService) {}

  @Get()
  getHello(): string {
    return this.docService.getHello();
  }

  @Get("/all")
  getAll(): any {
    return this.docService.getAll();
  }

  @Post("/create")
  createDoc(@Body() data: Prisma.DocumentsCreateInput): any {
    return this.docService.createPost(data);
  }

  @Put("/update/:publicId")
  updateDoc(
    @Param("publicId") publicId: string,
    @Body() data: Prisma.DocumentsUpdateInput
  ): any {
    return this.docService.updatePost(publicId, data);
  }
}
