import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard  from "./components/dashboard/Dashboard"
import Login from './components/login/Login'
import Navbar from './components/layout/Navbar'
import PriveteRoute from './routes/PrivateRoute'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
          <Route path='/layout' element={<Navbar />}/>
        <Route
          path="/dashboard"
          element={
            <PriveteRoute>
              <Dashboard />
            </PriveteRoute>
          }
        />
        <Route
            path='*' element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
