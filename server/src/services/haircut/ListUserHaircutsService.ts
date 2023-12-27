import prisma from "../../prisma"

interface HaircutsRequest {
  userId: string
}

class ListUserHaircutsService {
  async execute({ userId }: HaircutsRequest) {
    const haircuts = await prisma.haircut.findMany({
      where: {
        userId: userId,
      },
    })

    return haircuts
  }
}

export { ListUserHaircutsService }
