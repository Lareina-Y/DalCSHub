import { createContext, useContext, useState, useMemo, useCallback } from "react";

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    type: '',
    email: '',
    followedCourses: [],
    savedPosts: [],
    createdAt: '',
    updatedAt: '',
  });

  const userDetailRefresh = useCallback(
    () => {
      setUser({});
    }, []
  );

  const userContextValue = useMemo(
    () => ({user, setUser, userDetailRefresh}),
    [user, setUser, userDetailRefresh]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
