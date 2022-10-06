import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field() // @Field((type) => String) // If you want to be explicit == Is the same/default
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;
}
