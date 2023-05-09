import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([prisma.player.deleteMany(), prisma.rank.deleteMany()]);

  const ranks = [];
  const RANK_NAMES = [
    'Ferro I',
    'Ferro II',
    'Ferro III',
    'Bronze I',
    'Bronze II',
    'Bronze III',
    'Prata I',
    'Prata II',
    'Prata III',
    'Ouro I',
    'Ouro II',
    'Ouro III',
    'Platina I',
    'Platina II',
    'Platina III',
    'Diamante I',
    'Diamante II',
    'Diamante III',
    'Ascendente I',
    'Ascendente II',
    'Ascendente III',
    'Imortal I',
    'Imortal II',
    'Imortal III',
    'Radiante',
  ];

  for (let i = 0; i < RANK_NAMES.length; i++) {
    //tracker cdn rank images for ranking start at 3
    ranks.push({
      image: `https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/${
        i + 3
      }.png`,
      name: RANK_NAMES[i],
      value: i + 1,
    });
  }

  const unranked = await prisma.rank.create({
    data: {
      image: `https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/0.png`,
      name: 'Sem classificação',
      value: 0,
    },
  });

  await prisma.rank.createMany({
    data: [...ranks],
  });

  await prisma.player.create({
    data: { name: 'name', tag: 'tag', rankId: unranked.id },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
