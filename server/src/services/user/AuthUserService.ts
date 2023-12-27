import { compare } from "bcryptjs"
import prisma from "../../prisma"
import { sign } from "jsonwebtoken"

interface AuthUserRequest {
  email: string
  password: string
}

class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    if (!email || !password) {
      throw new Error("Invalid email or password")
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        subscriptions: true,
      },
    })

    if (!user) {
      throw new Error("Email/password incorrect")
    }

    const passwordIsMatch = await compare(password, user?.password)

    if (!passwordIsMatch) {
      throw new Error("Email/password incorrect")
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET as string,

      {
        subject: user.id,
        expiresIn: "30d",
      }
    )

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      address: user?.address,
      token: token,
      subscription: user.subscriptions
        ? {
            id: user.subscriptions?.id,
            status: user?.subscriptions.status,
          }
        : null,
    }
  }
}

export { AuthUserService }
