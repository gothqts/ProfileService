import http from 'services/http'
import config from '../../config.ts'
import { IUser } from 'screens/Auth/auth.types.ts'

export const profileLoader = async () => {

  if (localStorage.getItem('token')) {
    try {
      let resp = await http.get(config.API_URL + '/users')
      console.log('Загрузка профиля')
      const userData: IUser = resp.data
      return userData
    } catch (err) {
      return err
    }
  }
}