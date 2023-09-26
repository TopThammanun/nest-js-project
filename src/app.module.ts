import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentsController } from './documents/documents.controller';
import { DocumentsService } from './documents/documents.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, DocumentsController],
  providers: [AppService, DocumentsService, PrismaService],
})
export class AppModule {}
