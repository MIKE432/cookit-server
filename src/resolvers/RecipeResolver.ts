import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Recipe} from "../entity/Recipe";
import {getConnection} from "typeorm";
import {RecipeInput} from "../inputs/RecipeInput";

@Resolver()
export class RecipeResolver {
    @Query(() => Recipe, {nullable: false})
    async recipe(@Arg("id") id: number) {
        return await getConnection()
            .getRepository(Recipe)
            .findOne({
                relations: [
                    'nutrition',
                    'instructions',
                    'components',
                    'components.measurement'
                ],
                where: {id}
            })
    }

    @Query(() => [Recipe], {nullable: false})
    async scopedRecipes(@Arg("from") from: number, @Arg("to") to: number) {
        return await getConnection()
            .getRepository(Recipe)
            .find({
                skip: from,
                take: to - from,
                relations: [
                    'nutrition',
                    'instructions',
                    'components',
                    'components.measurement'
                ]
            })
    }

    @Query(() => [Recipe], {nullable: false})
    async recipes() {
        return await getConnection()
            .getRepository(Recipe)
            .find({
                relations: [
                    'nutrition',
                    'instructions',
                    'components',
                    'components.measurement'
                ]
            })
    }

    @Mutation(() => Recipe)
    async createRecipe(@Arg('data') {
        name,
        draftStatus,
        components,
        cookTimeInMinutes,
        description,
        instructions,
        nutrition,
        userRating
    }: RecipeInput) {
        return await getConnection()
            .getRepository(Recipe)
            .save({
                name,
                draftStatus,
                components,
                cookTimeInMinutes,
                description,
                instructions,
                nutrition,
                userRating
            })
    }

    @Mutation(() => Boolean)
    async deleteRecipe(@Arg("id") id: number) {
        return getConnection().getRepository(Recipe).delete({id})
    }
}