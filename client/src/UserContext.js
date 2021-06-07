import React, { useState, useContext, useReducer, useEffect } from "react";

export const UserContext = React.createContext(null);

const initialState = {
  loggedIn: false,
};
