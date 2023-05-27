import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IcecramAction } from "../redux/icecream/IcecreamAction.js";
const HookIcecreamContainer = () => {
  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <>
      <h2>number of icecream by hook(useSelector,useDispatch) = {numOfIcecream}</h2>
      <button onClick={() => dispatch(IcecramAction())}>button</button>
    </>
  );
};

export default HookIcecreamContainer;
