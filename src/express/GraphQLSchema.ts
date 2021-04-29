import { RecipeResolver } from "../resolvers/RecipeResolver"
import {buildSchema} from "type-graphql";
import {GraphQLSchema} from "graphql";
const schema =
`
    type Query {
        hello: String
    }
`
const resolvers = {
    Query: {
        hello: async (root: any, args: any, context: any) => await new Promise<string>(() => "adsadsasda")
    }
}

const getGraphQLSchema = async (): Promise<GraphQLSchema> => {
    return await buildSchema({
        resolvers: [RecipeResolver],
        emitSchemaFile: true,
        validate: false
    })
}

export default getGraphQLSchema