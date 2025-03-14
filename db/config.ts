import { defineDb, defineTable, column } from 'astro:db';

const Artist = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
  },
});

const Lyrics = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    text: column.text({ unique: true }),
    artistId: column.number({ references: () => Artist.columns.id }),
  },
});

export default defineDb({
  tables: { Artist, Lyrics },
});
