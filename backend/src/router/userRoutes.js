import { Router } from "express";
import { CreateUsuariosID, EditUser, GetAllUser, Login, UserSpecific } from "../controllers/UserController.js";
import upload from "../middleware/upload.js";

const router=Router()
router.post("/c",CreateUsuariosID)
router.get("/:id",UserSpecific)
router.get("/g/a",GetAllUser)
router.post("/v",Login)
router.put("/e/u/:id",upload.single('imageFile'),EditUser)
export default router