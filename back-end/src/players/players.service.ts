import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findById(id: string) {
    return await this.playersRepository.findById(id);
  }

  async findActive() {
    return await this.playersRepository.findActive();
  }

  async updateActivity(id: string) {
    const player = await this.findById(id);
    if (!player) throw new NotFoundException('player id not found');

    return await this.playersRepository.updateActivity(id);
  }
}
