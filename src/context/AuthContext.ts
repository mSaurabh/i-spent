import { createContext, useReducer } from "react";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ABC":
      break;
    default:
      break;
  }
};
export const AuthContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={...(state, dispatch)}>
      {children}
    </AuthContext.Provider>
  );
};

interface IAuthContext {
  user: any;
}
