import { Router, Request, Response } from "express"

const router = Router()

router.get("/testing", (req: Request, res: Response) => {
  return res.json({ ok: true })
})

export { router }
