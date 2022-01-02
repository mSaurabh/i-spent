import { createRef, FormEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
// hooks
import useSignup from "../../hooks/useSignup";
import { CAPTCHA } from "../login/captchaConfig";
//styles
import styles from "./Signup.module.css";

interface ISignupProps {}

const Signup = (props: ISignupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [captcha, setCaptcha] = useState("");
  const { error, isPending, signup } = useSignup();
  const [env, setEnv] = useState("");
  let captchaRef = createRef();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //console.log(displayName, email, password);
    signup(email, password, displayName, captcha);
  };

  const handleCaptcha = () => {
    if (captchaRef) {
      //@ts-ignore
      setCaptcha(captchaRef?.current?.getValue());
    }
  };

  // useEffect(()=>{

  // },[error]);

  useEffect(() => {
    setEnv(process.env.NODE_ENV.toUpperCase());
    // console.log("Environment is ", env);
  }, [process.env]);

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
      <ReCAPTCHA
        //@ts-ignore
        ref={captchaRef}
        sitekey={
          env
            ? env === "PRODUCTION"
              ? CAPTCHA.PRODUCTION
              : CAPTCHA.DEVELOPMENT
            : CAPTCHA.DEVELOPMENT
        }
        onChange={handleCaptcha}
      />
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Signup;
