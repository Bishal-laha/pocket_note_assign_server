import express from "express";
import { createGroup, getAllGroup, getGroup, storeNote } from "../controllers/note.controllers.js";

const router = express.Router();

router.get("/all-group",getAllGroup);
router.post("/create-group",createGroup)
router.post("/store-note/:groupId",storeNote);
router.get("/get-group/:groupId",getGroup);

export default router;