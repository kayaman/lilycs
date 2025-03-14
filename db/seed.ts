import { db, Artist, Lyrics } from 'astro:db';

export default async function seed(): Promise<void> {
  await db.insert(Artist).values([
    { id: 1, name: 'The Doors' },
    { id: 2, name: 'Pixies' },
  ]);

  await db.insert(Lyrics).values([
    { artistId: 1, text: "The future's uncertain and the end is always near" },
    { artistId: 2, text: "I'm digging for fire!" },
  ]);
}
