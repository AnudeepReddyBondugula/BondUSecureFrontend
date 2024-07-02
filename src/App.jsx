import Welcome from "./components/Welcome"
import { Routes, Route } from "react-router-dom"
import Login from "./components/user/Login"
import Register from "./components/user/Register"
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
