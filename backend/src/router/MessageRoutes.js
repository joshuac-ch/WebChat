import { Router } from "express";
import { CreateMessageChannel, CreateMessageFile, GetMessageChannel } from "../controllers/MessageController.js";
import upload from "../middleware/upload.js";
const router=Router()
router.get("/g/messagechannel/:channelID",GetMessageChannel)
router.post("/c/messagechannel",CreateMessageChannel)

router.post("/c/messageFile",upload.single("imageURL"),CreateMessageFile)
export default router