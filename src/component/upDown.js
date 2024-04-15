import React from 'react'
import { Navigate ,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { setSelArr } from '../store/actions'
import style from '../pages/classification/Classfication.module.scss'


const UpDown = () => {
  const navuseNavigate =useNavigate()
  const dispatch=useDispatch()
  const selArr = useSelector(s=>s.selArr)
  const chengOut=(a)=>{
    if(selArr&&selArr.findIndex(v=>v===a)===-1){
      const newArr=[...selArr]
      newArr.push(a)
      // setSelArr(newArr)
      dispatch(setSelArr(newArr))
      console.log(6666,a,selArr);
    }else{
      const newArr=[...selArr]
      newArr.splice(selArr&&selArr.findIndex(v=>v===a),1)
      // setSelArr(newArr)
      dispatch(setSelArr(newArr))
    }
  }
  return (
    <div className={`${style.footer} ${selArr.length>0?style.show:''}`}>
      <div className={style.go}>
        <p>已选食物（<span>{selArr.length}</span>）</p>
        <p onClick={()=>{navuseNavigate('/details')}}>去测评</p>
      </div>
      {selArr&&selArr.map((a,b)=>{
        return <p key={a.name}>{a.name} <span onClick={()=>{chengOut(a)}}>X</span></p>
      })}
    </div>
  )
}

export default UpDown