import prisma from "../../prisma"

interface HaircutRequest {
  userId: string
  haircutId: string
  name: string
  price: number
  status: string | boolean
}

class UpdateHaircutService {
  async execute({
    userId,
    haircutId,
    name,
    price,
    status = true,
  }: HaircutRequest) {
    // Verify if user is a premium member or not

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        subscriptions: true,
      },
    })

    if (user?.subscriptions?.status !== "ACTIVE") {
      throw new Error("User not authorized")
    }

    const haircut = await prisma.haircut.update({
      where: {
        id: haircutId,
      },
      data: {
        name: name,
        price: price,
        status: status === true ? true : false,
      },
    })

    return haircut
  }
}

export { UpdateHaircutService }
