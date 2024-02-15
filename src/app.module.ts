import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DocumentsController } from "./documents/documents.controller";
import { DocumentsService } from "./documents/documents.service";
import { ScbService } from "./scb/scb.service";
import { PrismaService } from "./prisma.service";
import { ScbController } from "./scb/scb.controller";
import { pwaTestController } from "./pwaTest/pwaTest.controller";
import { pwaTestService } from "./pwaTest/pwaTest.service";

@Module({
  imports: [],
  controllers: [
    AppController,
    DocumentsController,
    ScbController,
    pwaTestController,
  ],
  providers: [
    AppService,
    DocumentsService,
    PrismaService,
    ScbService,
    pwaTestService,
  ],
})
export class AppModule {}
