export enum ContactType {
  google = 'google',
  facebook = 'facebook',
  phone = 'phone',
  email = 'email',
}

export interface AppContext {
  controllers: {
    [key: string]: any,
  }
}

export interface SignInPayload {
  account: string,
  password: string,
}

export interface SignInBody {
  token: string,
}
