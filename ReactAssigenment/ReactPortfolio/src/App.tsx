import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Quiz from './pages/Quiz'
import Steeper from './pages/Steeper'

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/todo' element={<Todo />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/steeper' element={<Steeper />} />
    </Routes>
  )
}

export default App
