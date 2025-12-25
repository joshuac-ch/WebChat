import { Router } from "express";
import { CreateChannel, DeleteChatUSER, GetAllChannel, GetChannelCategoria, GetChannelID, GetChannelUser, SearchChannel, UpdateChannel } from "../controllers/ChannelController.js";
import upload from "../middleware/upload.js";

const router=Router()
router.get("/g/search/:query",SearchChannel)
router.post("/c",upload.single("imageFile"),CreateChannel)
router.get("/g/a",GetAllChannel) //forma global
router.get("/g/:id",GetChannelID)//mostrar canal
router.get("/u/a/:id",GetChannelUser)
router.get("/chat-users/:id/",GetChannelCategoria)
router.delete("/chat-delete/:id",DeleteChatUSER)
router.put("/update/:id",upload.single("image"),UpdateChannel)
export default router