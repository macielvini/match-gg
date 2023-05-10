import { Controller, Get, Headers } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get()
  find(@Headers() headers: { id: string }) {
    if (headers.id) {
      return this.matchesService.findById(headers.id);
    }

    return this.matchesService.findAll();
  }
}
