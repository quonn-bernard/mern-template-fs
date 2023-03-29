import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";
import {
  isNameInputValid,
  isObjectIDValid,
} from "../utils/validators/validateFormInputs.js";
import {
  InputValidationError,
  ResourceRetrievalError,
} from "../utils/customErrors/generalErrors.js";
import { InvalidObjectIDException } from "../utils/customErrors/dbErrors.js";
import sendEmail from "../utils/email/sendemail.js";
import * as dotenv from "dotenv";
dotenv.config();

const createItemService = asyncHandler(
  async ({ title, description }) => {
    // switch (false) {
    //   case isNameInputValid(name):
    //     throw new InputValidationError(`Invalid input: name`);
    //   case isEmailValid(email):
    //     throw new InputValidationError(`Invalid input: email`);
    //   case isPhoneNumberValid(phone):
    //     throw new InputValidationError(`Invalid input: phone number`);
    //   case await isObjectIDValid(service):
    //     throw new InvalidObjectIDException(`Invalid input: service id`);
    //   case isDateValid(date):
    //     throw new InputValidationError(`Invalid input: date`);
    //   case isTimeValid(time):
    //     throw new InputValidationError(`Invalid input: time`);
    // }
    try {
        console.log('fff')
      const newItem = await Item.create({
        title: title,
        description: description
      });
      console.log('test:',newItem)
      return newItem;
    } catch (error) {
      throw new Error("Invalid Item inputs!");
    }
  }
);

const getAllItemsService = asyncHandler(async () => {
  return await Item.find();
});

const getExistingItem = asyncHandler(async (itemID) => {
  const existingItem = await Item.findById({
    _id: itemID,
  });
  if (!existingItem)
    throw new ResourceRetrievalError("Item does not exist!");
  return existingItem;
});

const updateItemService = asyncHandler(
  async (id, { title, description }) => {
    // switch (false) {
    //   case isNameInputValid(name):
    //     throw new InputValidationError(`Invalid input: name`);
    //   case isEmailValid(email):
    //     throw new InputValidationError(`Invalid input: email`);          
    //   case isPhoneNumberValid(phone):
    //     throw new InputValidationError(`Invalid input: phone number`);
    //   case await isObjectIDValid(service):
    //     throw new InputValidationError(`Invalid input: service id`);
    //   case isDateValid(date):
    //     throw new InputValidationError(`Invalid input: date`);
    //   case isTimeValid(time):
    //     throw new InputValidationError(`Invalid input: time`);
    // }

    return await Item.findByIdAndUpdate(
      { _id: id },
      { title, description },
      { new: true }
    );
  }
);

const deleteItemService = asyncHandler(async (item) => {
  return await item.remove();
});

export {
  createItemService,
  getAllItemsService,
  updateItemService,
  deleteItemService,
  getExistingItem,
};
