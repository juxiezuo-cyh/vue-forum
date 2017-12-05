// api接口文件
import axios from "axios";
axios.defaults.baseURL = "http://keybuffer.cn:8081";

export function fetch(url, params) {
  return axios.get(url, { params: params }).then(res => res.data);
}

export function fetchPost(url, params) {
  return axios.post(url, params).then(res => res.data);
}

export default {
  questionHome(params) {
    return fetch("/question/question-for-home", params);
  },
  questionDetail(params) {
    return fetch("/question/question", params);
  },
  userSignup(params) {
    return fetch("/user/signup", params);
  }
};
