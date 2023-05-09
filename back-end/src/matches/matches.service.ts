import { Injectable } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {
  constructor(private readonly matchesRepository: MatchesRepository) {}

  async findAll() {
    return await this.matchesRepository.findAll();
  }

  async findById(id: string) {
    return await this.matchesRepository.findByPlayerId(id);
  }
}
