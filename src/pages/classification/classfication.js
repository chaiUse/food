import React ,{useState}from 'react'
import LeftAndRight from '../../component/leftAndRight'
import Search from '../../component/search'
import UpDown from '../../component/upDown'
import style from './Classfication.module.scss'
import { setSelArr } from '../../store/actions'
import {useSelector,useDispatch} from 'react-redux'

const Classification = () => {
  // const dispatch=useDispatch()
  // let [flage,setFlage] =useState(true)
  // const log =JSON.parse(localStorage.getItem('state'))
  // console.log(6665,log);
  // if(flage){
  //   setFlage(false)
  //   log&&dispatch(setSelArr(log.selArr))
  // }
  return (
    <div className={style.classification}>
      <Search></Search>
      <LeftAndRight ></LeftAndRight>
      <UpDown></UpDown>
    </div>
  )
}

export default Classification