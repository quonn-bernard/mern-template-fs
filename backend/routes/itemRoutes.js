import express from "express";
const itemRouter = express.Router();
import {
    addItem,
    getAllItems,
    updateItem,
    deleteItem,
    getItemByID,
} from "../controllers/itemController.js"
//
//
//
//
itemRouter.get("/", getAllItems);
itemRouter.post("/", addItem);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);
itemRouter.get("/:id", getItemByID)

export default itemRouter;
