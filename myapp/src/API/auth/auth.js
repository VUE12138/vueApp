import API_URL from '../config'
import axios from 'axios'

//登录
export default function login (params = {}){
    let url = `${API_URL}/login`
    return axios.post(url,params)
}
//register
export  function register (params={}){
    let url = `${API_URL}/register` 
    return axios.post(url,params)
}
//修改密码
export  function changePwd (params={}){
    let url = `${API_URL}/changePwd` 
    return axios.post(url,params)
}
//修改用户名
export  function changeName (params={}){
    let url = `${API_URL}/changeName` 
    return axios.post(url,params)
}
//修改头像
export  function changeIcon (params={}){
    let url = `${API_URL}/changeIcon` 
    return axios.post(url,params)
}

//获取用户主数据
