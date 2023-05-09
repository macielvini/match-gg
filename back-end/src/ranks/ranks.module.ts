import { Module } from '@nestjs/common';
import { RanksService } from './ranks.service';
import { RanksController } from './ranks.controller';
import { RanksRepository } from './ranks.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RanksService, RanksRepository],
  controllers: [RanksController],
  exports: [RanksService],
})
export class RanksModule {}
