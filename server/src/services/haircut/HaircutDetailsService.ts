import prisma from "../../prisma"

interface HaircutDetailsRequest {
  haircutId: string
}

class HaircutDetailsService {
  async execute({ haircutId }: HaircutDetailsRequest) {
    const haircutDetails = await prisma.haircut.findFirst({
      where: {
        id: haircutId,
      },
    })

    return haircutDetails
  }
}

export { HaircutDetailsService }
