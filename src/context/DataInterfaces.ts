export enum AUTHDISPATCH {
  "LOGIN" = "LOGIN",
  "LOGOUT" = "LOGOUT",
}

export interface IAuthContextState {
  user: any;
  dispatch: React.Dispatch<any>;
}
