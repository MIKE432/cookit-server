import {ApiCall, getRecipes} from "./ApiCalls";
import {Instruction as InstructionObj} from "../entity/Instruction";
import {Component as ComponentObj} from "../entity/Component";
import {Measurement as MeasurementObj} from "../entity/Measurement";
import {Recipe as RecipeObj} from "../entity/Recipe";
import {UserRating as UserRatingObj} from "../entity/UserRating";
import {getConnection} from "typeorm";
import {Nutrition as NutritionObj} from "../entity/Nutrition";
import {Component, Instruction, Measurement, Nutrition, Recipe, RecipeDB, UserRating} from "./Types";
import {apply} from "../Extensions/ObjectExtensions";


export const migrateDataFromTasty = async () => {
    let i = 8980
    let response = await ApiCall(getRecipes, {
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
            from: i, size: 40
        }
    });

    const recipes = response.data.results.map(recipe => createRecipe(recipe))
    await getConnection().getRepository(RecipeObj).save(recipes)
    i += 20
    while (response.data.results.length !== 0) {
        response = await ApiCall(getRecipes, {
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {
                from: i, size: 40
            }
        })

        console.log(`${i}-${i + 20}: ${response.data.results.length}`)

        const recipes = response.data.results.map(recipe => createRecipe(recipe))

        await getConnection().getRepository(RecipeObj).save(recipes)
        i+=20
    }


}

const createRecipe = (recipe: Recipe): RecipeObj => {
    return apply(new RecipeObj(), (obj) => {
        obj.name = recipe.name
        obj.thumbnailUrl = recipe.thumbnail_url
        obj.beautyUrl = recipe.beauty_url
        obj.description = recipe.description
        obj.draftStatus = recipe.draft_status
        obj.cookTimeInMinutes = recipe.total_time_minutes
        obj.components = recipe.sections?.filter(s => s.position === 1)[0].components.map(component => createComponent(obj, component))
        obj.instructions = recipe.instructions?.map(instruction => createInstruction(obj, instruction))
        obj.userRating = createUserRating(obj, recipe.user_ratings)
        obj.nutrition = createNutrition(obj, recipe.nutrition)
    })
}

const createInstruction = (recipe: RecipeObj, instruction: Instruction): InstructionObj => {
    return apply(new InstructionObj(), (obj) => {
        obj.temperature = instruction.temperature
        obj.appliance = instruction.appliance
        obj.endTime = instruction.end_time
        obj.startTime = instruction.start_time
        obj.position = instruction.position
        obj.displayText = instruction.display_text
        obj.recipe = recipe

    })
}

const createComponent = (recipe: RecipeObj, component: Component): ComponentObj => {
    return apply(new ComponentObj(), (obj) => {
        obj.extraComment = component.extra_comment
        obj.position = component.position
        obj.rawText = component.raw_text
        obj.recipe = recipe
        obj.measurement = createMeasurement(obj, component.measurements[0])
    })
}

const createMeasurement = (component: ComponentObj, measurement: Measurement): MeasurementObj => {
    return apply(new MeasurementObj(), (obj) => {
        obj.unit = measurement.unit.abbreviation
        obj.quantity = measurement.quantity
        obj.component = component
    })
}

const createUserRating = (recipe: RecipeObj, userRating: UserRating): UserRatingObj | undefined => {
    if (!userRating)
        return undefined

    return apply(new UserRatingObj(), (obj) => {
        obj.recipe = recipe
        obj.countNegative = userRating.count_negative
        obj.countPositive = userRating.count_positive
    })
}

const createNutrition = (recipe: RecipeObj, nutrition: Nutrition): NutritionObj | undefined => {
    if (!nutrition)
        return undefined
    return apply(new NutritionObj(), (obj) => {
        obj.protein = nutrition.protein
        obj.fat = nutrition.fat
        obj.sugar = nutrition.sugar
        obj.fiber = nutrition.fiber
        obj.carbohydrates = nutrition.carbohydrates
        obj.calories = nutrition.calories
        obj.recipe = recipe
    })

}