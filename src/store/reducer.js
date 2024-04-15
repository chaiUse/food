const initState ={
  selArr:[]
}
const reducer = (state=initState,action)=>{
  if(action.type==='setDate'){
    state ={...state,...action.payload}
    localStorage.setItem('state',JSON.stringify(state))
    return state
  }
  if(action.type==='setSelArr'){
    state={...state,selArr:[...action.payload]}
    localStorage.setItem('state',JSON.stringify(state))
    return state
  }
  return state
}

export default reducer