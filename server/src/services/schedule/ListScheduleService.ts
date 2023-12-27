import prisma from "../../prisma"

interface ListScheduleRequest {
  userId: string
}

class ListScheduleService {
  async execute({ userId }: ListScheduleRequest) {
    const schedule = await prisma.service.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        customer: true,
        haircut: true,
      },
    })

    return schedule
  }
}

export { ListScheduleService }
