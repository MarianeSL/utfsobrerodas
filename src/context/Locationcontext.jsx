import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  return (
    <LocationContext.Provider value={{ origin, setOrigin, destination, setDestination }}>
      {children}
    </LocationContext.Provider>
  );
};