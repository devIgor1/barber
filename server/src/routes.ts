import { Router, Request, Response } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { UserDetailController } from "./controllers/user/UserDetailController"

const router = Router()

// --USER ROUTES-- //

router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", new UserDetailController().handle)

export { router }
