import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, firebaseEnabled, googleProvider } from "../firebase.js";

const AuthContext = createContext({ user: null, ready: true, signIn: () => {}, logOut: () => {}, enabled: false });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(!firebaseEnabled);

  useEffect(() => {
    if (!firebaseEnabled) return undefined;
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
  }, []);

  const signIn = () => (firebaseEnabled ? signInWithPopup(auth, googleProvider) : Promise.resolve());
  const logOut = () => (firebaseEnabled ? signOut(auth) : Promise.resolve());

  return (
    <AuthContext.Provider value={{ user, ready, signIn, logOut, enabled: firebaseEnabled }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react/only-export-components
export const useAuth = () => useContext(AuthContext);
