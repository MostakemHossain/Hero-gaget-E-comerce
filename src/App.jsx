import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

const App = () => {
  return <>
    <Header></Header>
    <div className="min-h-[calc(100vh-160px)]">
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    
  </>
}

export default App
