import {Redirect} from 'react-router-dom'
import Classification from '../pages/classification/classfication'
import Detalis from '../pages/details/detalis'
import Test from '../pages/test/test'

const routesConfig = [
  {
    path:'/',
    element:<Classification />
  },
  {
    path:'/details',
    element:<Detalis />
  },
  {
    path:'/test',
    element:<Test />
  }
]

export default routesConfig