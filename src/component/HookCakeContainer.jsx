import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CakeAction } from "../redux/cakes/CakeAction";

const HookCakeContainer = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>number of cake by hook(useSelector,useDispatch) = {numOfCake}</h2>
      <button onClick={() => dispatch(CakeAction())}>button</button>
    </>
  );
};

export default HookCakeContainer;
