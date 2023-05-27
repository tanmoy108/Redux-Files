import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CakeAction } from "../redux/cakes/CakeAction";
const NewCakeContainer = () => {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <>
      <h2>New Cake Container {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(CakeAction(number))}>
        {number} cake
      </button>
    </>
  );
};

export default NewCakeContainer;
