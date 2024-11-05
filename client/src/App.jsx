import './App.css'
import {Routes, Route} from "react-router-dom"
import RootLayout from './components/RootLayout'
import Hero from './pages/Hero'



function App() {
  const user = null

  if(!user){
    return(
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
    )
  }
  

  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App
