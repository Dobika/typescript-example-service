import * as express from 'express';

function Hi(req: express.Request, rsp: express.Response) {
    rsp.send("Hi, this is coming from the example typescript service.")
}