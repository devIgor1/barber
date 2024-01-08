import prisma from "../../prisma"

interface HaircutRequest {
  haircutId: string
}

class DeleteHaircutService {
  async execute({ haircutId }: HaircutRequest) {
    const haircut = await prisma.haircut.delete({
      where: {
        id: haircutId,
      },
    })

    return { message: "haircut deleted" }
  }
}

export { DeleteHaircutService }
