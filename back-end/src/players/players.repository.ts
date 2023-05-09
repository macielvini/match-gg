import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDTO } from './dtos/create-player-dto';

@Injectable()
export class PlayersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(body: CreatePlayerDTO) {
    return this.prisma.player.upsert({
      where: { name_tag: body },
      create: { ...body },
      update: { ...body },
    });
  }

  findAll() {
    return this.prisma.player.findMany();
  }
}
