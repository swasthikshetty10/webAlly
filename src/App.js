import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CourseEnrollment from './Components/CourseEnrollment'
import Home from './Components/HomePage'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}></Route>
          <Route index path='/enroll' element={<CourseEnrollment />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
