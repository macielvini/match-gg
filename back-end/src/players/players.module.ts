import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PlayersRepository } from './players.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PlayersService, PlayersRepository],
  controllers: [PlayersController],
  exports: [PlayersService],
})
export class PlayersModule {}
