import "dotenv/config";
import { defineConfig } from "prisma/config";

console.log('--- VERIFYING ENVS ---');
console.log('DATABASE_URL loaded:', process.env.DATABASE_URL ? 'YES' : 'NO');
console.log('DIRECT_URL loaded:', process.env.DIRECT_URL ? 'YES' : 'NO');
console.log('DIRECT_URL Value:', process.env.DIRECT_URL);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DIRECT_URL!,
  },
});
