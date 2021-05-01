import {Recipe} from "./Types";

export interface RecipesListResponse {
    count: number,
    results: Recipe[]
}