import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DocumentsController } from "./documents/documents.controller";
import { DocumentsService } from "./documents/documents.service";
import { ScbService } from "./scb/scb.service";
import { PrismaService } from "./prisma.service";
import { ScbController } from "./scb/scb.controller";

@Module({
  imports: [],
  controllers: [AppController, DocumentsController, ScbController],
  providers: [AppService, DocumentsService, PrismaService, ScbService],
})
export class AppModule {}
