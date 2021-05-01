import {Recipe} from "./Recipe";
import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, ObjectType} from "type-graphql";


@ObjectType()
@Entity()
export class Nutrition {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({ default: 0 })
    calories!: number

    @Field()
    @Column({ default: 0 })
    carbohydrates!: number

    @Field()
    @Column({ default: 0 })
    fat!: number

    @Field()
    @Column({ default: 0 })
    protein!: number

    @Field()
    @Column({ default: 0 })
    sugar!: number

    @Field()
    @Column({ default: 0 })
    fiber!: number

    @OneToOne(type => Recipe, recipe => recipe.nutrition)
    recipe!: Recipe
}