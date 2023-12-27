import { Request, Response } from "express"
import { NewScheduleService } from "../../services/schedule/NewScheduleService"

class NewScheduleController {
  async handle(req: Request, res: Response) {
    const { haircutId, customer } = req.body
    const userId = req.userId

    const newSchedule = new NewScheduleService()

    const schedule = await newSchedule.execute({
      customer,
      haircutId,
      userId,
    })

    return res.json(schedule)
  }
}

export { NewScheduleController }
