import {Field, InputType} from "type-graphql";
import {Recipe} from "../entity/Recipe";
import {Column, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Instruction} from "../entity/Instruction";
import {Component} from "../entity/Component";
import {UserRating} from "../entity/UserRating";
import {Nutrition} from "../entity/Nutrition";
import {InstructionInput} from "./InstructionInput";
import {ComponentInput} from "./ComponentInput";
import {UserRatingInput} from "./UserRatingInput";
import {NutritionInput} from "./NutritionInput";

@InputType()
export class RecipeInput implements Partial<Recipe> {

    @Field()
    name!: string

    @Field({nullable: true})
    draftStatus?: string

    @Field({nullable: true})
    cookTimeInMinutes?: number

    @Field({nullable: true})
    description?: string

    @Field(() => [InstructionInput], {nullable: true})
    instructions?: Instruction[]

    @Field(() => [ComponentInput])
    components?: Component[]

    @Field(() => UserRatingInput, {nullable: true})
    userRating?: UserRating

    @Field(() => NutritionInput, {nullable: true})
    nutrition?: Nutrition
}