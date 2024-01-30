import { ScbService } from "./scb.service";
import { Controller, Get, Post, Body, Param, Put } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Controller("scb")
export class ScbController {
  constructor(private readonly scbService: ScbService) {}

  @Get()
  getHello(): string {
    return this.scbService.getHello();
  }

  @Post("/checkEndpoint")
  createDoc(@Body() data: Prisma.TestScbCreateInput): any {
    return this.scbService.createCheck(data);
  }
}
