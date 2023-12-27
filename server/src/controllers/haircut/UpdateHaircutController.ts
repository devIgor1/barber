import { Request, Response } from "express"
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService"

class UpdateHaircutController {
  async handle(req: Request, res: Response) {
    const userId = req.userId

    const { name, price, status, haircutId } = req.body

    const updateHaircut = new UpdateHaircutService()

    const haircut = await updateHaircut.execute({
      haircutId,
      price,
      status,
      name,
      userId,
    })

    return res.json(haircut)
  }
}

export { UpdateHaircutController }
