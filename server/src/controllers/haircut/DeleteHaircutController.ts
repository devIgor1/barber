import { Request, Response } from "express"
import { HaircutDetailsService } from "../../services/haircut/HaircutDetailsService"

class DeleteHaircutController {
  async handle(req: Request, res: Response) {
    const haircutId = req.query.haircutId as string

    const deletHaircut = new HaircutDetailsService()

    const haircut = await deletHaircut.execute({ haircutId })

    return res.json(haircut)
  }
}

export { DeleteHaircutController }
