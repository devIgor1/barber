import { Request, Response } from "express"
import { ListUserHaircutsService } from "../../services/haircut/ListUserHaircutsService"

class ListUserHaircutsController {
  async handle(req: Request, res: Response) {
    const userId = req.userId

    const listUserHaircuts = new ListUserHaircutsService()

    const userHaircuts = await listUserHaircuts.execute({ userId })

    return res.json(userHaircuts)
  }
}

export { ListUserHaircutsController }
