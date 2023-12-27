import { Router } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { UserDetailController } from "./controllers/user/UserDetailController"
import { isAuthenticated } from "./middlewares/isAuthenticated"
import { UpdateUserController } from "./controllers/user/UpdateUserController"
import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController"
import { ListUserHaircutsController } from "./controllers/haircut/ListUserHaircutsController"
import { UpdateHaircutController } from "./controllers/haircut/UpdateHaircutController"
import { CheckSubscriptionController } from "./controllers/haircut/CheckSubscriptionController"
import { CountHaircutsController } from "./controllers/haircut/CountHaircutsController"
import { HaircutDetailsController } from "./controllers/haircut/HaircutDetailsController"

const router = Router()

// --USERS ROUTES-- //

router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new UserDetailController().handle)

router.put("/user", isAuthenticated, new UpdateUserController().handle)

// --HAIRCUTS ROUTES-- //

router.post("/haircut", isAuthenticated, new CreateHaircutController().handle)

router.get(
  "/haircuts",
  isAuthenticated,
  new ListUserHaircutsController().handle
)

router.put("/haircut", isAuthenticated, new UpdateHaircutController().handle)

router.get(
  "/haircut/check",
  isAuthenticated,
  new CheckSubscriptionController().handle
)

router.get(
  "/haircut/count",
  isAuthenticated,
  new CountHaircutsController().handle
)

router.get(
  "/haircut/details",
  isAuthenticated,
  new HaircutDetailsController().handle
)

export { router }
