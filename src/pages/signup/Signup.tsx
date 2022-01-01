import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import styles from "./Signup.module.css";

interface ISignupProps {}

const Signup = (props: ISignupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, isPending, signup } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //console.log(displayName, email, password);
    signup(email, password, displayName);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <span className="error">{error}</span>}
    </form>
  );
};

export default Signup;
