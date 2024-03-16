/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from 'express-serve-static-core'
import * as express from 'express'

export type Query = core.Query

export type Request<
  ReqQuery = any,
  P = any,
  ResBody = any,
  ReqBody = any
> = express.Request<P, ResBody, ReqBody, ReqQuery>

export type Response = express.Response
