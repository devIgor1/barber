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
