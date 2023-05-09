import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatchesRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.match.findMany({
      select: {
        id: true,
        PlayerOnMatch: {
          select: {
            player: {
              select: {
                id: true,
                name: true,
                tag: true,
                Rank: { select: { id: true, image: true, name: true } },
              },
            },
          },
        },
      },
    });
  }
}
