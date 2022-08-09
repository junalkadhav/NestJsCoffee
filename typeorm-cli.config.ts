import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1655462515995 } from "src/migrations/1655462515995-CoffeeRefactor";
import { SchemaSync1655463239058 } from "src/migrations/1655463239058-SchemaSync";
import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1655462515995, SchemaSync1655463239058],
});