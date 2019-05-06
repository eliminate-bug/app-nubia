import axios from 'axios'

const ajax = axios.create()

export const getHomeData = () => {
  return ajax.get('/api/show/page/block?pageType=5')
}
