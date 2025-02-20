import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const user = "alisher"

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider  };
