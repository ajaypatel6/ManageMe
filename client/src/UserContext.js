import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

// get all components, of children, wrapping
// wrapping the dash with provider makes the stuff inside props

// destructures props.children -> children
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest" });
  return (
    // user,setuser as states
    <UserContext.Provider value={(user, setUser)}>
      {children}
    </UserContext.Provider>
  );
};
