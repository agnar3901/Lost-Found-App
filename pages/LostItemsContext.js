// LostItemsContext.js
import React, { createContext, useState } from 'react';

const LostItemsContext = createContext();

const LostItemsProvider = ({ children }) => {
  const [lostItems, setLostItems] = useState([]);

  const addLostItem = (item) => {
    setLostItems((prevItems) => [...prevItems, item]);
  };

  return (
    <LostItemsContext.Provider value={{ lostItems, addLostItem }}>
      {children}
    </LostItemsContext.Provider>
  );
};

export { LostItemsContext, LostItemsProvider };
