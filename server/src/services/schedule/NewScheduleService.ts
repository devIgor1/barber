import prisma from "../../prisma"

interface NewScheduleRequest {
  userId: string
  haircutId: string
  customer: string
}

class NewScheduleService {
  async execute({ customer, haircutId, userId }: NewScheduleRequest) {
    if (!customer || !haircutId) {
      throw new Error("Error executing new schedule")
    }

    const schedule = await prisma.service.create({
      data: {
        customer,
        haircutId,
        userId,
      },
    })

    return schedule
  }
}

export { NewScheduleService }
