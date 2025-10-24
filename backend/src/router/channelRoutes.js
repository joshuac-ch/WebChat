import { Router } from "express";
import { CreateChannel, GetChannelID } from "../controllers/ChannelController.js";

const router=Router()
router.post("/c",CreateChannel)
router.get("/g/:id",GetChannelID)
export default router