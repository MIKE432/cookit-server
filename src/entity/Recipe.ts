import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Instruction} from "./Instruction";
import {Component} from "./Component";
import {UserRating} from "./UserRating";
import {Nutrition} from "./Nutrition";
import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class Recipe {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    name!: string

    @Field({nullable: true})
    @Column({nullable: true})
    draftStatus?: string

    @Field({nullable: true})
    @Column({nullable: true})
    cookTimeInMinutes?: number

    @Field({nullable: true})
    @Column({nullable: true})
    description?: string

    @Field(() => [Instruction], {nullable: true})
    @OneToMany(type => Instruction, instruction => instruction.recipe, {nullable: true, cascade: true})
    instructions?: Instruction[]

    @Field(() => [Component], {nullable: true})
    @OneToMany(type => Component, component => component.recipe, {nullable: true, cascade: true})
    components?: Component[]

    @Field(() => [UserRating], {nullable: true})
    @OneToOne(type => UserRating, userRating => userRating.recipe, {nullable: true, cascade: true})
    @JoinColumn()
    userRating?: UserRating

    @Field(() => Nutrition)
    @OneToOne(type => Nutrition, nutrition => nutrition.recipe, {nullable: true, cascade: true})
    @JoinColumn()
    nutrition?: Nutrition

    @Field({nullable: true})
    @Column({nullable: true})
    thumbnailUrl?: string


    @Field({nullable: true})
    @Column({nullable: true})
    beautyUrl?: string
}