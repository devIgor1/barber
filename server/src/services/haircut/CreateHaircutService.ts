import prisma from "../../prisma"

interface HaircutRequest {
  userId: string
  name: string
  price: number
}

class CreateHaircutService {
  async execute({ userId, name, price }: HaircutRequest) {
    if (!name || !price) {
      throw new Error("Please fill in all fields.")
    }

    // Verify how many haircut models this user has

    const myHaircuts = await prisma.haircut.count({
      where: {
        userId: userId,
      },
    })

    // Verify if the user is premium or not, limiting the number of haircut models available to create

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        subscriptions: true,
      },
    })

    // Creating the limitation of haircut models

    if (myHaircuts >= 3 && user?.subscriptions?.status !== "ACTIVE") {
      throw new Error("Not Authorized")
    }

    const haircut = await prisma.haircut.create({
      data: {
        name: name,
        price: price,
        userId: userId,
      },
    })

    return haircut
  }
}
export { CreateHaircutService }
