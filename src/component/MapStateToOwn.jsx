import React from "react";
import { connect } from "react-redux";
import { CakeAction } from "../redux/cakes/CakeAction";
import { IcecramAction } from "../redux/icecream/IcecreamAction";
const MapStateToOwn = (props) => {
  //console.log(props);
  return (
    <>
      <h2>
        {props.cake ? "cake" : "icecream"} item : {props.item}
      </h2>
      <button onClick={props.buyItem}>
        Buy {props.cake ? "cake" : "icecream"}
      </button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFun = ownProps.cake
    ? () => dispatch(CakeAction())
    : () => {
        dispatch(IcecramAction());
      };

  return {
    buyItem: dispatchFun,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MapStateToOwn);
