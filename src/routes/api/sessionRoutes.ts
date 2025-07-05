import { Router } from "express";
import {
  getSessions,
  getSessionById,
  deleteSession,
  clearSessions,
} from "../../controller/api/sessionController";

const router = Router();

router.get("/", getSessions);

router.get("/:id", getSessionById);

router.delete("/:id", deleteSession);

router.delete("/", clearSessions);

export { router as sessionRouter };
