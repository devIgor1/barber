import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

interface PayLoad {
  sub: string
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(" ")

  const jwtSecret = process.env.JWT_SECRET as string

  try {
    const { sub } = verify(token, jwtSecret) as PayLoad

    req.userId = sub

    return next()
  } catch (error) {
    return res.status(401).end()
  }
}
