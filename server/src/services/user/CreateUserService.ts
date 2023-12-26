import prisma from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Please enter a valid email")
    }

    const userAlreadExists = await prisma.user.findFirst({
      where: {
        email: email,
      },
    })

    if (userAlreadExists) {
      throw new Error("User already exists")
    }

    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      },
    })

    return user
  }
}

export { CreateUserService }
