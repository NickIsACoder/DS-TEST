/**
 * Created by Administrator on 2017/4/26.
 */
import  dataIP from "./config";
import axios from 'axios'

export default  function getData(module, para, obj, callback) {
  switch (module) {
    case 'SubPost':
      getSubPostMothod(para,obj, callback);
      break;
    case 'SubGet':
      getSubGetMothod(para,obj, callback);
      break;
  }
}


function getSubPostMothod (para,obj, callback) {
  const IP = dataIP + para;
  axios.post(IP,obj).then(response => {
    callback(response.data)
  }).catch(error => {
    if(error.response.status!='504'){
      callback({message: '请求接口报错！错误码：' + error.response.status})
    } else {
      callback({message: '请求超时，请重试。'})
    }
  })
}

function getSubGetMothod (para,obj, callback) {
  const IP = dataIP + para;
  axios.get(IP).then(response => {
    callback(response.data)
  }).catch(error => {
    if(error.response.status!='504'){
      callback({message: '请求接口报错！错误码：' + error.response.status})
    } else {
      callback({message: '请求超时，请重试。'})
    }
  })
}
