import { NextFunction, Request, Response } from "express";
import app from "./app"
import http from "http"
import NotOK from "./response/notOk";
import HTTPStatusCode from "./enums/http/status.enum";
const port = process.env.PORT || 5000;
const server = http.createServer(app)

app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    NotOK(res, err.message, err.data, err.statusCode)
});

server.listen(port, () => {
    console.log(`Server is running at ${port} ::[${new Date().toISOString()}]`)
})