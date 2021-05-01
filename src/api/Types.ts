export interface Recipe {
    name: string,
    draft_status: string,
    beauty_url: string,
    thumbnail_url: string,
    total_time_minutes: number
    description: string,
    instructions?: Instruction[],
    nutrition: Nutrition,
    sections?: Section[],
    user_ratings: UserRating
}

export interface RecipeDB {
    name: string,
    draft_status: string,
    beauty_url: string,
    thumbnail_url: string,
    total_time_minutes: number
    description: string,
    instructions?: Instruction[],
    nutrition: Nutrition,
    sections?: Section[],
    components?: Component[]
    user_ratings: UserRating
}

export interface Nutrition {
    calories: number,
    carbohydrates: number,
    fat: number,
    protein: number,
    sugar: number,
    fiber: number,
}

export interface Instruction {
    display_text: string,
    position: number,
    start_time: number,
    end_time: number,
    appliance: string,
    temperature: number
}

export interface Component {
    raw_text: string,
    extra_comment: string,
    position: number,
    measurements: Measurement[]
}

export interface Measurement {
    quantity: string,
    unit: Unit

}

export interface Unit {
    name: string,
    abbreviation: string
}

export interface UserRating {
    count_positive: number,
    count_negative: number
}

export interface ApiCallParameters {
    url: string,
    params: any
}

interface Section {
    position: number,
    components: Component[]
}