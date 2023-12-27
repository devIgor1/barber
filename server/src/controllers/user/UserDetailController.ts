import { Request, Response } from "express"
import { UserDetailService } from "../../services/user/UserDetailService"

class UserDetailController {
  async handle(req: Request, res: Response) {
    const userId = req.userId
    console.log(userId)

    const userDetailService = new UserDetailService()

    const userDetail = await userDetailService.execute(userId)
    return res.json(userDetail)
  }
}

export { UserDetailController }
