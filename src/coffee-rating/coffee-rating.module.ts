import { Module } from '@nestjs/common';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres', // username
      password: 'pass123', // user password
      // username:  process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
    }),
    CoffeesModule
  ],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule { }
