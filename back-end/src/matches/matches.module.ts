import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MatchesRepository } from './matches.repository';

@Module({
  imports: [PrismaModule],
  providers: [MatchesService, MatchesRepository],
  controllers: [MatchesController],
  exports: [MatchesService],
})
export class MatchesModule {}
