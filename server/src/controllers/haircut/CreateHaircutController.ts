import { Request, Response } from "express"
import { CreateHaircutService } from "../../services/haircut/CreateHaircutService"

class CreateHaircutController {
  async handle(req: Request, res: Response) {
    const { name, price } = req.body
    const userId = req.userId

    const createHaircut = new CreateHaircutService()

    const haircut = await createHaircut.execute({
      name,
      price,
      userId,
    })

    return res.json(haircut)
  }
}

export { CreateHaircutController }
