import React from 'react'
import { Route  , Routes ,} from 'react-router'
import  Login from './Pages/Login'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import Notfoundpage from './Pages/Notfoundpage'
const App = () => {
  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='*' element={<Notfoundpage/>} />



    </Routes>
    </>
  )
}

export default App