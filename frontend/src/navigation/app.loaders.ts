import config from '../config.ts'
import { IUser } from 'screens/Auth/auth.types.ts'
import http from 'services/http'


export const profileLoader = async () => {

  if (localStorage.getItem('token')) {
    try {
      let resp = await http.get(config.API_URL + '/users')
      console.log('Загрузка профиля')
      return resp.data as IUser
    } catch (err) {
      return err
    }
  }
}