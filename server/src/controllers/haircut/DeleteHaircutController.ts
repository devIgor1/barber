import { Request, Response } from "express"
import { DeleteHaircutService } from "../../services/haircut/DeleteHaircutService" // Ajuste do nome do serviço

class DeleteHaircutController {
  async handle(req: Request, res: Response) {
    const haircutId = req.query.haircutId as string

    const deleteHaircut = new DeleteHaircutService()

    const haircut = await deleteHaircut.execute({ haircutId })

    return res.json(haircut)
  }
}

export { DeleteHaircutController }
