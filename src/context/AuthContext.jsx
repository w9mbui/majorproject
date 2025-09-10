import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const ref = doc(db, "users", currentUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setRole(snap.data().role);
      } else {
        setRole(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const signUp = async (email, password, role = "student") => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", cred.user.uid), {
      role,
      email,
    });
    return cred.user;
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, role, signUp, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}


