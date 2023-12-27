import prisma from "../../prisma"

interface CountHaircutsRequest {
  userId: string
}

class CountHaircutsService {
  async execute({ userId }: CountHaircutsRequest) {
    const countHaircuts = await prisma.haircut.count({
      where: {
        userId: userId,
      },
    })

    return countHaircuts
  }
}

export { CountHaircutsService }
