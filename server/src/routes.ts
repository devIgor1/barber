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
import { NewScheduleController } from "./controllers/schedule/NewScheduleController"
import { ListScheduleController } from "./controllers/schedule/ListScheduleController"
import { FinishScheduleController } from "./controllers/schedule/FinishScheduleController"
import { ListAllUserController } from "./controllers/user/ListAllUsersController"

const router = Router()

// --USERS ROUTES-- //

router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/users", new ListAllUserController().handle)

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

// --SCHEDULE ROUTES-- //

router.post("/schedule", isAuthenticated, new NewScheduleController().handle)

router.get("/schedules", isAuthenticated, new ListScheduleController().handle)

router.delete(
  "/schedule",
  isAuthenticated,
  new FinishScheduleController().handle
)

export { router }
