import {Instruction} from "../entity/Instruction";
import {Field, InputType} from "type-graphql";
import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../entity/Recipe";

@InputType()
export class InstructionInput implements Partial<Instruction> {

    @Field()
    displayText?: string

    @Field()
    position!: number

    @Field({nullable: true})
    startTime?: number

    @Field({nullable: true})
    endTime?: number

    @Field({nullable: true})
    appliance?: string

    @Field({nullable: true})
    temperature?: number
}