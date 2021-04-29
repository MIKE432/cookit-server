import {UserRating} from "../entity/UserRating";
import {Field, InputType} from "type-graphql";
import {Column, ManyToOne} from "typeorm";
import {Recipe} from "../entity/Recipe";

@InputType()
export class UserRatingInput implements Partial<UserRating> {
    @Field()
    countPositive!: number

    @Field()
    countNegative!: number
}