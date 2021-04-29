import {Component} from "../entity/Component";
import {Field, InputType} from "type-graphql";
import {Column, JoinColumn, ManyToOne, OneToOne} from "typeorm";
import {Recipe} from "../entity/Recipe";
import {Measurement} from "../entity/Measurement";
import {NutritionInput} from "./NutritionInput";
import {MeasurementInput} from "./MeasurementInput";

@InputType()
export class ComponentInput implements Partial<Component>{

    @Field()
    rawText!: string

    @Field({nullable: true})
    extraComment?: string

    @Field()
    position!: number

    @Field(() => MeasurementInput, {nullable: false})
    measurement!: Measurement
}