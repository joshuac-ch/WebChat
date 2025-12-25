import { Router } from "express";
import { CreateChatUser, CreateUsuariosID, EditUser, GetAllUser,  Login, SearchSpecificChat, SearchUserChat,SearchChatTest, UserSpecific } from "../controllers/UserController.js";
import upload from "../middleware/upload.js";

const router=Router()
router.post("/c",CreateUsuariosID)
router.get("/:id",UserSpecific)
//para la busqueda del usuario
router.get("/search/:id",SearchChatTest)
//conection entre 2 chats para mostrar su informacion
router.get("/specific-chat/:id/:other",SearchSpecificChat)
router.get("/g/a",GetAllUser)
router.get("/g/search/:user",SearchUserChat)
router.post("/v",Login)
router.put("/e/u/:id",upload.single('imageFile'),EditUser)
router.post("/chat/private/:usera/:userb",CreateChatUser)

export default router