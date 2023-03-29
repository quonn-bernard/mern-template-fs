import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";
import {
  createItemService,
  getAllItemsService,
  updateItemService,
  deleteItemService,
  getExistingItem,
} from "../services/itemService.js";

const getAllItems = asyncHandler(async (req, res) => {
  try {
    const items = await getAllItemsService();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getItemByID = asyncHandler(async (req, res) => {
  try {
    const item = await getExistingItem(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const addItem = asyncHandler(async (req, res) => {

  try {
    const item = await createItemService(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const updateItem = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const existingItem = await Item.findById(id);
  if (!existingItem)
    res.status(404).json({ message: `item not found!` });
  try {
    const item = await updateItemService(id, req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const deleteItem = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const item = await Item.findById(id);
  if (!item) res.status(404).json({ message: `item not found!` });
  try {
    deleteItemService(item);
    res.status(200).json({ message: "item deleted successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export {
  addItem,
  getAllItems,
  updateItem,
  deleteItem,
  getItemByID,
};
