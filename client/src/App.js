import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./components/landingPage/LandingPage.jsx"
import Home from "./components/home/Home.jsx"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>   
        </div>
     </BrowserRouter>
  );
}

export default App;
