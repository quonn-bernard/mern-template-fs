import axios from "axios";

const API_URL = "/items/";

const createItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, itemData, config);
  return response.data;
};

const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getAllItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const deleteItem = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(id);

  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const updateItem = async (updateData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(updateData);

  const response = await axios.put(API_URL + updateData.id, updateData, config);
  return response.data;
};

const itemService = {
  createItem,
  getItems,
  getAllItems,
  deleteItem,
  updateItem,
};

export default itemService;
