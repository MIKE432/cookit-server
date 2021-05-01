import axios, {AxiosResponse} from "axios";
import {RecipesListResponse} from "./ApiResponseTypes";
import {ApiCallParameters} from "./Types";

export const getRecipes = async (url: string, params: any): Promise<AxiosResponse<RecipesListResponse>> => {

    return await axios.get<RecipesListResponse>(url, params)
}

export function ApiCall<T = any, R = AxiosResponse<T>>(fun: (url: string, params: any) => Promise<R>, parameters: ApiCallParameters): Promise<R> {
    const options = {
        params: parameters,
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': process.env.HOST_KEY
        }
    }

    return fun(parameters.url, options)
}