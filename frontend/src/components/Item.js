import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/items/itemSlice";
// import UpdateItemForm from "./UpdateItemForm";
// import isDashbaordPage from "../utils/isDashboardPage";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const toggleUpdateForm = () => {
    setIsUpdateFormVisible(!isUpdateFormVisible);
  };

  return (
    <div>
      <div style={{ border: "1px solid", width: "200px", margin: "2rem 0" }}>
        <p>{new Date(item.createdAt).toLocaleString("en-US")}</p>
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>
      {/* {isDashbaordPage() && (
        <>
          <button onClick={() => dispatch(deleteItem(item._id))}>
            Delete Item
          </button>
          <button onClick={toggleUpdateForm}>Update Item</button>
          {isUpdateFormVisible && <UpdateItemForm id={item._id} />}{" "}
        </>
      )} */}
    </div>
  );
};

export default Item;
