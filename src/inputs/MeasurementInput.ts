import {Measurement} from "../entity/Measurement";
import {Field, InputType} from "type-graphql";
import {Column, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Component} from "../entity/Component";

@InputType()
export class MeasurementInput implements Partial<Measurement> {

    @Field()
    quantity!: number

    @Field()
    unit!: string
}