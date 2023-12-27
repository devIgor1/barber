import { Request, Response } from "express"
import { HaircutDetailsService } from "../../services/haircut/HaircutDetailsService"

class HaircutDetailsController {
  async handle(req: Request, res: Response) {
    const haircutId = req.query.haircutId as string

    const haircutDetails = new HaircutDetailsService()

    const details = await haircutDetails.execute({ haircutId })

    return res.json(details)
  }
}

export { HaircutDetailsController }
