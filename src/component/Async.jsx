import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/async_user/AsyncAction";
import { useEffect } from "react";
const Async = ({ userData, userDispatch }) => {
  useEffect(() => {
    userDispatch();
  }, []);
  return userData.loading ? (
    <h2>loading</h2>
  ) : userData.error ? (
    <h2>error = {userData.error}</h2>
  ) : (
    <>
      <h2>user list</h2>
      {userData &&
        userData.users &&
        userData.users.map((userName) => <p>{userName.name}</p>)}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user, // user from rootStore
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userDispatch: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Async);
