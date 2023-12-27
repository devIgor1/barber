import { Request, Response } from "express"
import { CountHaircutsService } from "../../services/haircut/CountHaircutsService"

class CountHaircutsController {
  async handle(req: Request, res: Response) {
    const userId = req.userId

    const countHaircuts = new CountHaircutsService()

    const count = await countHaircuts.execute({
      userId,
    })

    return res.json(count)
  }
}

export { CountHaircutsController }
