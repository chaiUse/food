  import React ,{useState,useMemo, useEffect}from 'react'
  import style from '../pages/classification/Classfication.module.scss'
  import {useSelector,useDispatch} from 'react-redux'
  import { setSelArr } from '../store/actions'

  const LeftAndRight = (props) => {
    const dispatch=useDispatch()
    // console.log(props);
    const [index,setIndex]=useState(0)
    // const [selArr,setSelArr]=useState([])
    const value = useSelector(s=>s.value)
    const selArr = useSelector(s=>s.selArr)
    const chengOut=(a)=>{
      if(selArr&&selArr.findIndex(v=>v.name===a.name)===-1){
        const newArr=[...selArr]
        newArr.push(a)
        // setSelArr(newArr)
        dispatch(setSelArr(newArr))
        console.log(6666,a,selArr);
      }else{
        const newArr=[...selArr]
        newArr.splice(selArr&&selArr.findIndex(v=>v.name===a.name),1)
        // setSelArr(newArr)
        dispatch(setSelArr(newArr))
      }
    }
    return (
      <div className={style.LeftAndRight}>
        <div className={style.left}>
          <ul>
            {value?.map((a,b)=>{
              return (
                <li className={b===index?style['active']:''} onClick={()=>{setIndex(b)}} key={a.name}>
                  {a.name}
                </li>)
            })}
          </ul>
        </div>
        <div className={style.right}>
          <ul>
            {value&&value[index].list.map((a,b)=>{
              return <li key={a.name} onClick={()=>chengOut(a)} className={selArr&&selArr.findIndex(v=>v.name===a.name)!==-1?style['active']:''} >
                <img src={a.imgUrl}></img>
                <p>{a.name}</p>
              </li>
            })
            }
          </ul>
        </div>
      </div>
    )
  }

  export default LeftAndRight