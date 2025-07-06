import { Router } from "express";
import { getClient } from "../../controller/api/clientController";

const router = Router();

router.get("/", getClient);

export { router as clientRouter };
