import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError("");
    setIsPending(true);

    // sign the user out
    try {
      await projectAuth.signOut();
      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };
  return { logout, error, isPending };
};

export default useLogout;
