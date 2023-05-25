import React from "react";
import { connect } from "react-redux";
import { CakeAction } from "../redux/cakes/CakeAction";
const Container = (props) => {
  return (
    <>
      <h2>Cake in Shop {props.numOfCakess}</h2>
      <button onClick={props.CakeActions} >button</button>
    </>
  );
};

//-------------------

const mapStateToProps = (state) => {
  return {
    numOfCakess: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CakeActions: () => {
      dispatch(CakeAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
