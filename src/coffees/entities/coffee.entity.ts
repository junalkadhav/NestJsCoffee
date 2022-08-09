import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

// Composite index that contains Multiple columns
//@Index(['name','type']) // <-- 
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  /**
  * To help speed up this search, we can define an index on the “name” column 
  * using the @Index decorator. 
  */
  @Index()
  @Column()
  name: string;

  // @Column({ nullable: true })
  // description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable() // Join the 2 tables - only the OWNER-side does this
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees, // what is "coffee" within the Flavor Entity
    {
      cascade: true // or optionally just insert or update ['insert']
    }
  )
  flavors: Flavor[];
}