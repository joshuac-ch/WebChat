import { Router } from "express";
import { CreateMessageChannel, GetMessageChannel } from "../controllers/MessageController.js";
const router=Router()
router.get("/g/messagechannel/:channelID",GetMessageChannel)
router.post("/c/messagechannel",CreateMessageChannel)
export default router