import { Request, Response } from "express"
import { FinishScheduleService } from "../../services/schedule/FinishScheduleService"

class FinishScheduleController {
  async handle(req: Request, res: Response) {
    const userId = req.userId
    const scheduleId = req.query.scheduleId as string

    const deleteSchedule = new FinishScheduleService()

    const schedule = await deleteSchedule.execute({
      scheduleId,
      userId,
    })

    return res.json(schedule)
  }
}

export { FinishScheduleController }
