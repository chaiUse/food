import React ,{useEffect, useState}from 'react'
import routesConfig from './router'
import { useRoutes } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { setDate, setSelArr } from './store/actions'


const App= ()=>{
  const dispatch=useDispatch()
  let [flage,setFlage] =useState(true)
  const log =JSON.parse(localStorage.getItem('state'))
  if(flage){
    setFlage(false)
    log&&dispatch(setSelArr(log.selArr))
  }
  useEffect(()=>{
    dispatch(setDate)
  },[])
  const routes=useRoutes(routesConfig)
  return routes
  
}

export default App