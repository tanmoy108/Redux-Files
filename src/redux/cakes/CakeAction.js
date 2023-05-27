import { BUY_CAKE } from "./CakeActionType"

export const CakeAction = (number = 1) =>{
  return {
    type: BUY_CAKE,
    payload: number,
  };
}