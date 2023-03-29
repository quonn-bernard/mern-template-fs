import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllItems } from "../features/items/itemSlice";
import Item from "../components/Item";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getAllItems());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <section>
      <h1>All Items</h1>
      <ul>
        {items.length ? (
          items.map((item) => {
            return <Item key={item._id} item={item} />;
          })
        ) : ( (!user) ? (<>
          <h2>You must be logged in to view this content</h2>
        </>) : (<>
            <h2>You have no items to display</h2>
          </>)
        )}
      </ul>
    </section>
  );
};

export default Home;
