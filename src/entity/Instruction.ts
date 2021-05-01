import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "./Recipe";
import {Field, ID, ObjectType} from "type-graphql";


@ObjectType()
@Entity()
export class Instruction {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field({nullable: true})
    @Column({nullable: true})
    displayText?: string

    @Field()
    @Column()
    position!: number

    @Field({nullable: true})
    @Column({nullable: true})
    startTime?: number

    @Field({nullable: true})
    @Column({nullable: true})
    endTime?: number

    @Field({nullable: true})
    @Column({nullable: true})
    appliance?: string

    @Field({nullable: true})
    @Column({nullable: true})
    temperature?: number

    @ManyToOne(type => Recipe, recipe => recipe.instructions)
    recipe!: Recipe
}