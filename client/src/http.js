import axios from 'axios'

const http = axios.create({
  //   baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  baseURL: 'http://express-func-uonfmlwckv.cn-hongkong.fcapp.run/'
})

export default http
