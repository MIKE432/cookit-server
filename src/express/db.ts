import {Connection, createConnection} from "typeorm";
import {Recipe} from "../entity/Recipe";
import {Component} from "../entity/Component";
import {Measurement} from "../entity/Measurement";
import {Nutrition} from "../entity/Nutrition";
import {Instruction} from "../entity/Instruction";

export const initConnection = async () => {
    const connection: Connection = await createConnection()
    console.log(`Connection ${connection.name} connected successfully`)
    // const recipe = new Recipe()
    // const component = new Component()
    // const measurement = new Measurement()
    // const nutrition = new Nutrition()
    // const instruction = new Instruction()
    //
    // instruction.position = 0
    // instruction.displayText = "Dobra muffinka"
    // instruction.startTime = 1
    // instruction.endTime = 2
    // instruction.appliance = "ads"
    // instruction.temperature = 10
    //
    // nutrition.fat = 10
    // nutrition.calories = 15
    // nutrition.carbohydrates = 20
    // nutrition.fiber = 25
    // nutrition.sugar = 30
    // nutrition.protein = 10
    //
    // measurement.unit = "g"
    // measurement.quantity = 10
    //
    // component.measurement = measurement
    // component.rawText = "1/2 łyszki soli"
    // component.position = 0
    // component.extraComment = ""
    //
    // recipe.name = "Muffin"
    // recipe.components = [component]
    // recipe.cookTimeInMinutes = 10
    // recipe.description = "Testowe description"
    // recipe.nutrition = nutrition
    // recipe.instructions = [instruction]
    // recipe.draftStatus = ""
    //
    // await connection.getRepository(Recipe).save(recipe)
}