import {
  signInWithPopup,
  getAdditionalUserInfo,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider, db } from "../firebase";
import { addDoc, collection, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

export default function LogIn() {
  const [user, setUser] = useState();
  async function handleClick() {
    const result = await signInWithPopup(auth, googleProvider);
    const usersCollection = collection(db, "users");
    const additionalInfo = await getAdditionalUserInfo(result);

    if (additionalInfo.isNewUser) {
      const usersCollection = collection(db, "users");
      await setDoc(
        addDoc(usersCollection, result.user.email, {
          email: result.user.email,
          name: result.user.displayName,
        })
      );
    }

    setUser(result.user);

    console.log(additionalInfo);
  }

  // async function mostrarDatos() {
  //   if (user !== null) {
  //     alert(user.displayName);
  //   } else {
  //     alert("no se ha iniciado sesion");
  //   }
  // }

  // async function cerrarSesion() {
  //   await signOut(auth);
  //   setUser(null);
  // }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  // });

  return (
    <div>
      <header className="title">Log in</header>
      <button className="btn" onClick={handleClick}>
        Iniciar sesion
      </button>
      <button className="btn" onClick={mostrarDatos}>
        Mostrar datos
      </button>
      <button className="btn" onClick={cerrarSesion}>
        Cerrar Sesion
      </button>
    </div>
  );
}
