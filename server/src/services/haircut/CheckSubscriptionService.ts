import prisma from "../../prisma"

interface CheckSubscription {
  userId: string
}

class CheckSubscriptionService {
  async execute({ userId }: CheckSubscription) {
    const status = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        subscriptions: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    })

    return status
  }
}

export { CheckSubscriptionService }
