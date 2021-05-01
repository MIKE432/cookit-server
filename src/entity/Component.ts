import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "./Recipe";
import {Measurement} from "./Measurement";
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class Component {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    rawText!: string

    @Field({nullable: true})
    @Column({nullable: true})
    extraComment?: string

    @Field()
    @Column()
    position!: number

    @ManyToOne(type => Recipe, recipe => recipe.components)
    recipe!: Recipe

    @Field(() => Measurement)
    @OneToOne(type => Measurement, measurement => measurement.component, {cascade: true, onDelete: "CASCADE"})
    @JoinColumn()
    measurement!: Measurement
}