import axios from 'axios'

export const setSelArr = (payload) => {
  console.log('payload',payload);
  return {
    type: 'setSelArr',
    payload
  }
}
export const setDate =(dispatch)=>{
  axios.get('https://zyxcl.xyz/exam_api/food').then(res=>{
    dispatch({
      type:'setDate',
      payload:res.data
    })
  })
}