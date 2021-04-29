import dotenv from "dotenv";
import {runPreInit} from "./ServerInitFunctions";
import {initConnection} from "./db";
import express, {Express} from "express";

export const initServer = async (): Promise<Express> => {
    dotenv.config({path: '.env'})
    runPreInit(process.env)
    await initConnection()
    return express()
}