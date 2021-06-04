import React, { useState, useContext, useReducer, useEffect } from "react";
const AppContext = React.createContext();

const initialState = {
  loggedIn: false,
};
