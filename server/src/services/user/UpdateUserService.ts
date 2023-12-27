import prisma from "../../prisma"

interface UserRequest {
  userId: string
  name: string
  address: string
}

class UpdateUserService {
  async execute({ userId, name, address }: UserRequest) {
    try {
      const userFound = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      })

      if (!userFound) {
        throw new Error("User not found")
      }

      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          name,
          address,
        },
        select: {
          name: true,
          email: true,
          address: true,
        },
      })

      return updatedUser
    } catch (error) {
      console.log(error)
      throw new Error("Error updating user!")
    }
  }
}

export { UpdateUserService }
