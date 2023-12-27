import prisma from "../../prisma"

interface HaircutsRequest {
  userId: string
  status: boolean | string
}

class ListUserHaircutsService {
  async execute({ userId, status }: HaircutsRequest) {
    const haircuts = await prisma.haircut.findMany({
      where: {
        userId: userId,
        status: status === "ACTIVE" ? true : false,
      },
    })

    return haircuts
  }
}

export { ListUserHaircutsService }
