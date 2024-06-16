export interface IAuthForm {
  name?: string
  email: string
  password: string
}

export interface IUser {
  id: number
  name: string
  email: string

  workInterval?: number
  breakInterval?: number
  intervalsCount?: number
}

export interface IAuthResponse {
  email: string
  expiresIn: string
  idToken: string
  kind: string
  localId: string
  refreshToken: string
}
