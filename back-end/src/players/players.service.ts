import { Injectable } from '@nestjs/common';
import { PlayersRepository } from './players.repository';
import { CreatePlayerDTO } from './dtos/create-player-dto';

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}

  async create(body: CreatePlayerDTO) {
    return await this.playersRepository.create(body);
  }

  async findAll() {
    return await this.playersRepository.findAll();
  }
}
