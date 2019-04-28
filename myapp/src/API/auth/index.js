import API_URL from '../config'
import axios from 'axios'

//获取用户全部信息,除密码
export default function getIndex (params = {}){
    let url = `${API_URL}/getIndex`
    return axios.get(url,params)
}