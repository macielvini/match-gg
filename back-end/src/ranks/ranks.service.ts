import { Injectable } from '@nestjs/common';
import { RanksRepository } from './ranks.repository';

@Injectable()
export class RanksService {
  constructor(private readonly ranksRepository: RanksRepository) {}

  async findAll() {
    return await this.ranksRepository.findAll();
  }
}
