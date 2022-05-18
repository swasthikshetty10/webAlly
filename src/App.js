import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CourseEnrollment from './Components/CourseEnrollment'
import Footer from './Components/Footer'
import Home from './Components/HomePage'
import Login from './Components/Login'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path='/' element={<Home />}></Route>
          <Route index path='/enroll' element={<CourseEnrollment />}></Route>
          <Route index path='/login' element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
