import axios from 'axios'
import Cookies from 'js-cookie'
import { IAuthForm, IAuthResponse } from '../types/auth.types'

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

export const authService = {
  async main(type: 'Up' | 'InWithPassword', data: IAuthForm) {
    const response = await axios.post<IAuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:sign${type}?key=${process.env.REACT_APP_API_KEY}`,
      data
    )
    if (response) {
      console.log(response)
    }

    if (response.data.idToken) saveTokenToStorage(response.data.idToken)

    return response
  }

  // async getNewToken(refreshToken: string) {
  // 	const response = await axios.post<>(`https://securetoken.googleapis.com/v1/token?key=[API_KEY]`, {grant_type: 'refresh_token', refreshToken})
  // 	if (response.data)
  // }
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokenToStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1
  })
}

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
