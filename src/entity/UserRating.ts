import {Recipe} from "./Recipe";
import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class UserRating {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    countPositive!: number

    @Field()
    @Column()
    countNegative!: number

    @OneToOne(type => Recipe, recipe => recipe.userRating)
    recipe!: Recipe
}