import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListner } from '../utils/firebase/firebase.util';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscibe = onAuthStateChangedListner((user) => {
      console.log(user);
    });

    return unsubscibe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
