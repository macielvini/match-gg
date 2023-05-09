import { Injectable } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';

@Injectable()
export class MatchesService {
  constructor(private readonly matchesRepository: MatchesRepository) {}

  async findAll() {
    return await this.matchesRepository.findAll();
  }
}
