import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase-config";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
      <input onChange={(p) => setPassword(p.target.value)} type="password" placeholder="password"></input>
      <button onClick={signIn}>Sign in</button>
    </div>
  );
};
export default Auth;
