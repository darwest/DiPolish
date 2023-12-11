import {BrowserRouter, Route, Routes} from "react-router-dom" // для навігації між сторінками 

//Імпорт сторінок
import Home from "./pages/Home/Home"
import Test from "./pages/Test/Test"

//Імпорт компонентів
import Header from "./components/Header/Header"


import "./App.scss"

//Оголошення функціонального компонента
function App() {
//<BrowserRouter> - обгортка, яка надає контекст для використання маршрутизації в додатку
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
