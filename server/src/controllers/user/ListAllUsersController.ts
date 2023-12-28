import { Request, Response } from "express"
import { ListAllUsersService } from "../../services/user/ListAllUsersService"

class ListAllUserController {
  async handle(req: Request, res: Response) {
    const listUsers = new ListAllUsersService()

    const users = await listUsers.execute()

    return res.json(users)
  }
}

export { ListAllUserController }
