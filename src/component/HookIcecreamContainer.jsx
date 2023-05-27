import { useSelector,useDispatch } from "react-redux";
import {IcecramAction} from "../redux/icecream/IcecreamAction.js";
const HookIcecreamContainer = () => {

  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <>
      <h2>hook Icecream = {numOfIcecream}</h2>
      <button onClick={()=>dispatch(IcecramAction())}>button</button>
    </>
  );
};

export default HookIcecreamContainer;