export interface AuthLoginResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export class User {
  constructor(
    private email: string,
    private token: string,
    private localId:string,
    private expirationDate:Date
  ){}
}
