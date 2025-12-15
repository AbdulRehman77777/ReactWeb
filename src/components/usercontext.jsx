import React, { createContext, useState, useContext } from 'react';

// Create the Context
const UserContext = createContext(null);

// Create the Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user is null (not logged in)

  // Function to log in
  const loginUser = (userData) => {
    setUser(userData);
  };

  // Function to log out
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context easily
export const useUser = () => useContext(UserContext);