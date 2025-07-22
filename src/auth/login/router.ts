import { Router } from "express";
import { handleEsiLogin } from "./controller";

const router: Router = Router();
router.get("/login", handleEsiLogin);

export default router;
