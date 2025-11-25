import { Router } from "express";
import { CreateChatUser, CreateUsuariosID, EditUser, GetAllUser,  Login, SearchUserChat, UserSpecific } from "../controllers/UserController.js";
import upload from "../middleware/upload.js";

const router=Router()
router.post("/c",CreateUsuariosID)
router.get("/:id",UserSpecific)
router.get("/g/a",GetAllUser)
router.get("/g/search/:user",SearchUserChat)
router.post("/v",Login)
router.put("/e/u/:id",upload.single('imageFile'),EditUser)
router.post("/chat/private/:usera/:userb",CreateChatUser)

export default router