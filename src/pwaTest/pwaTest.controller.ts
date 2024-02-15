import { pwaTestService } from "./pwaTest.service";
import { Controller, Get, Post, Body } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Controller("pwaTest")
export class pwaTestController {
  constructor(private readonly pwaTestService: pwaTestService) {}

  @Get()
  getHello(): string {
    return this.pwaTestService.getHello();
  }

  @Post("/create")
  createDoc(@Body() data: Prisma.pwaTestCreateInput): any {
    return this.pwaTestService.create(data);
  }

  @Get("/all")
  getAll(): any {
    return this.pwaTestService.getAll();
  }
}
