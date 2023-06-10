import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Correo electrónico"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={userSignIn}>Iniciar sesión</button>
    </div>
  );
};
