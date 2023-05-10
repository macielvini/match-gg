import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDTO } from './dtos/create-player-dto';

@Injectable()
export class PlayersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create({ name, tag, rankId }: CreatePlayerDTO) {
    return this.prisma.player.upsert({
      where: { name_tag: { name, tag } },
      create: { name, tag, rankId },
      update: { name, tag, rankId },
    });
  }

  findAll() {
    return this.prisma.player.findMany({
      include: { Rank: { select: { id: true, name: true, image: true } } },
    });
  }

  findById(id: string) {
    return this.prisma.player.findUnique({ where: { id } });
  }

  updateActivity(id: string) {
    const now = new Date();

    return this.prisma.player.update({
      where: { id },
      data: {
        updatedAt: now.toISOString(),
      },
    });
  }
}
