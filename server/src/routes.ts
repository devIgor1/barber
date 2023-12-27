import { Router, Request, Response } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { UserDetailController } from "./controllers/user/UserDetailController"
import { isAuthenticated } from "./middlewares/isAuthenticated"
import { UpdateUserController } from "./controllers/user/UpdateUserController"
import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController"

const router = Router()

// --USERS ROUTES-- //

router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new UserDetailController().handle)

router.put("/user", isAuthenticated, new UpdateUserController().handle)

// --HAIRCUTS ROUTES-- //

router.post("/haircut", isAuthenticated, new CreateHaircutController().handle)

export { router }
