import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './controllers/person.controller';
import { PersonService } from './services/person.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService, PrismaService],
})
export class AppModule {}
