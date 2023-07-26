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
    async (userId) => {
      const res = await fetch(`/api/user/${userId}`);
      if (res.status === 200) {
        const result = await res.json();
        setUser(result.data);
      } else {
        console.log('At least one of the fields is invalid from front end');
      }
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
