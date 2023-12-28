import prisma from "../../prisma"

class ListAllUsersService {
  async execute() {
    const users = await prisma.user.findMany()

    return users
  }
}

export { ListAllUsersService }
