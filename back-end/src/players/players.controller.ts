import { Body, Controller, Get, Post } from '@nestjs/common';
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
  async findAll() {
    return await this.playersService.findAll();
  }
}
