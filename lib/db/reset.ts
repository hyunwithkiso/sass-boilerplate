import * as schema from "./schema";
import { reset } from "drizzle-seed";
import { drizzle } from "drizzle-orm/postgres-js";

async function main() {
  const db = drizzle(process.env.POSTGRES_URL!);
  await reset(db, schema);
}

main();
