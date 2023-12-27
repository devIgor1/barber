import { Request, Response } from "express"
import { AuthUserService } from "../../services/user/AuthUserService"

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authUser = new AuthUserService()

    const session = await authUser.execute({
      email,
      password,
    })

    return res.json(session)
  }
}

export { AuthUserController }
