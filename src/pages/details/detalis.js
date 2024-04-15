import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate ,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { setSelArr } from '../../store/actions';

const Detalis = () => {
  const [index,setIndex]=useState([])
  const navigate = useNavigate();
  const navuseNavigate =useNavigate()
  const dispatch=useDispatch()
  const selArr = useSelector(s=>s.selArr)
  const [countOne,setCountOne]=useState([])
  const [countTwo,setCountTwo]=useState([])
  const [countthree,setCountthree]=useState([])
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect(()=>{
    
  selArr.forEach(a=>{
    if(a.glycemicIndex>=0&&a.glycemicIndex<=40){
      setCountOne(prevCountOne => [...prevCountOne, a]);
      
      // const newArr =[...countOne]
      // console.log(787877,newArr);
      // newArr.push(a)
      // console.log(787877,newArr);
      // setCountOne(newArr)
      // console.log(66666,a,newArr,countOne);
    }else 
    if(a.glycemicIndex>40&&a.glycemicIndex<=70){
      // const newArr =[...countTwo]
      // newArr.push(a)
      // setCountTwo(newArr)
      
      setCountOne(prevCountOne => [...prevCountOne, a]);
    }else 
    if(a.glycemicIndex>70&&a.glycemicIndex<=100){
      // const newArr =[...countthree]
      // newArr.push(a)
      // setCountthree(newArr)
      setCountthree(prevCountThree => [...prevCountThree, a]);
    }
    // console.log(a.glycemicIndex,countOne,countTwo);
  })
  },[selArr])
  useMemo(()=>{
    console.log(6969696,index);
    setIndex(()=>[...countOne])
  },[countOne])
  const aaa=(a)=>{
    setIndex([...a])
  }
  return (
    <div>
      <p>
        <span onClick={handleGoBack}> &lt; </span>食物健康测评
      </p>
      <main>
        <div>
          <p onClick={()=>aaa(countOne)}>
            <span>{countOne.length}</span>
            <span>建议少吃</span>
          </p>
          <p onClick={()=>aaa(countTwo)}>
            <span>{countTwo.length}</span>
            <span>建议少吃</span>
          </p>
          <p onClick={()=>aaa(countthree)}>
            <span>{countthree.length}</span>
            <span>建议少吃</span>
          </p>
        </div>
        <div>以下食物升糖指数偏低，可以放心食用</div>
        <ul>
          {index.map(a=>{
      
            return <li key={a.name} onClick={()=>{navigate(`/test/?name=${a.name}`)}}>
              <img src={a.imgUrl}></img>
              <p>{a.name}</p>
              
            </li>
          }) }     
        </ul>
      </main>
    </div>
  );
};

export default Detalis;
