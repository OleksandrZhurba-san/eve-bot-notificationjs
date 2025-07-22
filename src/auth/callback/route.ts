import { Router } from "express";
import { handleEsiCallback } from "./controller";

const router: Router = Router();
router.get("/callback", handleEsiCallback)

export default router;
