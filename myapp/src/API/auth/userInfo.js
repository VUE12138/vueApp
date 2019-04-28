import API_URL from '../config'
import axios from 'axios'

//获取用户全部信息,除密码
export default function getUserInfo (params = {}){
    let url = `${API_URL}/getUserInfo`
    return axios.get(url,params)
}
//查询用户
export default function searchUser (params = {}){
    let url = `${API_URL}/searchUser`
    return axios.get(url,params)
}
//查询用户-展示的页面用户信息
export default function searchUserInfo (params = {}){
    let url = `${API_URL}/searchUserInfo`
    return axios.get(url,params)
}

