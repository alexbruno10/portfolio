import '../src/styles/global.scss'
import Header from './components/Header'
import Home from './pages/Home'
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
