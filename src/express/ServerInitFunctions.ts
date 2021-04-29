import {Express} from "express";
import {graphqlHTTP, Options} from 'express-graphql'
import {GraphQLSchema} from "graphql";
import getGraphQLSchema from "./GraphQLSchema";
import {Tuple} from "./Types";
import {EnvNotSatisfiedError} from "../errors/errors";

async function applyMiddlewares(app: Express) {
    const schema: GraphQLSchema = await getGraphQLSchema()
    const options: Options = {graphiql: true, schema}

    app.use('/graphql', graphqlHTTP(options))
}

async function initServer(app: Express) {
    await applyMiddlewares(app)
}

const checkEnvVariables = (env: any, variablesToCheck: [string]): Tuple<boolean, string> => {
    const returnVariable: Tuple<boolean, string> = {v1: true, v2: ""}

    variablesToCheck.forEach((value) => {
        if (!env[value]) {
            returnVariable.v1 = false
            returnVariable.v2 = value

        }
    })

    return returnVariable
}

export const runPreInit = (env: any): void => {
    const checked = checkEnvVariables(env, ["PORT"])
    if (!checked.v1)
        throw new EnvNotSatisfiedError(`necessary variable ${checked.v2} is not declared in .env file`)
}

const runServer = async (app: Express) => {
    await initServer(app)
    app.listen(process.env.PORT, () => console.log(`App is listening on port ${process.env.PORT}`))
}

export default runServer