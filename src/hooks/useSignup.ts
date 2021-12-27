import { useState } from "react";
import { AUTHDISPATCH } from "../context/DataInterfaces";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

// interface ISignupProps {}

const useSignup = () => {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setError("");
    setIsPending(true);
    try {
      if (email && password && displayName) {
        // signup user
        const res = await projectAuth.createUserWithEmailAndPassword(
          email,
          password
        );
        // console.log(res.user);

        if (!res) {
          throw new Error("Could not signup the user.");
        }

        // add display name to user
        await res.user?.updateProfile({ displayName: displayName });

        // dispatch login action
        dispatch({ type: AUTHDISPATCH.LOGIN, payload: res.user });

        setError("");
        setIsPending(false);
      } else {
        throw new Error("Missing user info. Please check your entry");
      }
    } catch (err: any) {
      // catch error
      setError(err.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};

export default useSignup;
