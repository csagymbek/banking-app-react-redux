import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Auth = () => {
  const { isLoggedIn } = useSelector(({ auth: { isLoggedIn } }) => ({
    isLoggedIn,
  }));

  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-info"
        style={{
          color: "white",
          position: "absolute",
          right: "50px",
          top: "25px",
        }}
        onClick={() => dispatch({ type: "TOGGLE_AUTH" })}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
