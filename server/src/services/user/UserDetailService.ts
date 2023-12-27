import prisma from "../../prisma"

class UserDetailService {
  async execute(userId: string) {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        address: true,
        subscriptions: {
          select: {
            id: true,
            priceId: true,
            status: true,
          },
        },
      },
    })
    return user
  }
}

export { UserDetailService }
