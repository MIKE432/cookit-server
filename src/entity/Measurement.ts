import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Component} from "./Component";
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class Measurement {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({ default: "" })
    quantity!: string

    @Field()
    @Column({ default: "g" })
    unit!: string

    @OneToOne(type => Component, component => component.measurement)
    component!: Component
}