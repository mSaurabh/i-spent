import { createContext, useReducer } from "react";
import { AUTHDISPATCH, IAuthContextState } from "./DataInterfaces";

export const AuthContext = createContext<IAuthContextState>(
  {} as IAuthContextState
);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case AUTHDISPATCH.LOGIN:
      return { ...state, user: action.payload };
    case AUTHDISPATCH.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch]: [
    state: IAuthContextState,
    dispatch: React.Dispatch<IAuthContextState>
  ] = useReducer(authReducer, {
    user: null,
  });

  console.log(
    "%c Oh my heavens! 🔥 ",
    "background: #222; color: #bada55",
    state
  );
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
