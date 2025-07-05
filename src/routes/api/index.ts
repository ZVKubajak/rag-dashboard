import { Router } from "express";
import { clientRouter } from "./clientRoutes";
import { sessionRouter } from "./sessionRoutes";

const router = Router();

router.use("/clients", clientRouter);
router.use("/sessions", sessionRouter);

export default router;
