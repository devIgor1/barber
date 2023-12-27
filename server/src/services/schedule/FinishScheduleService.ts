import prisma from "../../prisma"

interface FinishScheduleRequest {
  scheduleId: string
  userId: string
}

class FinishScheduleService {
  async execute({ scheduleId, userId }: FinishScheduleRequest) {
    if (!scheduleId || !userId) {
      throw new Error("Error")
    }

    try {
      const belongsToUser = await prisma.service.findFirst({
        where: {
          id: scheduleId,
          userId: userId,
        },
      })

      if (!belongsToUser) {
        throw new Error("Not authorized")
      }

      await prisma.service.delete({
        where: {
          id: scheduleId,
        },
      })

      return { message: "Schedule successfully deleted" }
    } catch (error) {
      console.log(error)
      throw new Error("Error")
    }
  }
}

export { FinishScheduleService }
