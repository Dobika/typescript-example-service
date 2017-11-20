import * as express from 'express';

declare module 'service' {
    export function Hi(req: express.Request, rsp: express.Response);
}