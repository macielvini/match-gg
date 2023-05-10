import { Body, Controller, Get, Headers, Patch, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDTO } from './dtos/create-player-dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() body: CreatePlayerDTO) {
    return this.playersService.create(body);
  }

  @Get('all')
  findAll() {
    return this.playersService.findAll();
  }

  @Get('/search')
  findActive() {
    return this.playersService.findActive();
  }

  @Patch()
  updateActivity(@Headers() headers: { id: string }) {
    return this.playersService.updateActivity(headers.id);
  }
}
