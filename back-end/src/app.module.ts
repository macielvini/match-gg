import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RanksModule } from './ranks/ranks.module';
import { RanksController } from './ranks/ranks.controller';
import { PlayersModule } from './players/players.module';
import { PlayersController } from './players/players.controller';
import { MatchesModule } from './matches/matches.module';
import { MatchesController } from './matches/matches.controller';

@Module({
  imports: [RanksModule, PlayersModule, MatchesModule],
  controllers: [
    AppController,
    RanksController,
    PlayersController,
    MatchesController,
  ],
  providers: [AppService],
})
export class AppModule {}
