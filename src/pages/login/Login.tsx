import { createRef, FormEvent, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { CAPTCHA } from "./captchaConfig";
// styles
import styles from "./Login.module.css";

interface ILoginProps {}

const Login = (props: ILoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();
  const [env, setEnv] = useState("");
  const [captcha, setCaptcha] = useState("");
  let captchaRef = createRef();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login(email, password, captcha);
  };
  useEffect(() => {
    setEnv(process.env.NODE_ENV.toUpperCase());
    console.log("Environment is ", env);
  }, [process.env]);

  const handleCaptcha = () => {
    if (captchaRef) {
      //@ts-ignore
      setCaptcha(captchaRef?.current?.getValue());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
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
      <button className="btn" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Login;
