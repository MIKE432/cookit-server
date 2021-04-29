import {Nutrition} from "../entity/Nutrition";
import {Field, InputType} from "type-graphql";
import {Column, OneToOne} from "typeorm";
import {Recipe} from "../entity/Recipe";

@InputType()
export class NutritionInput implements Partial<Nutrition> {
    @Field()
    calories!: number

    @Field()
    carbohydrates!: number

    @Field()
    fat!: number

    @Field()
    protein!: number

    @Field()
    sugar!: number

    @Field()
    fiber!: number
}