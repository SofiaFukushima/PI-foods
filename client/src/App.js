import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./components/landingPage/LandingPage.jsx"
import Home from "./components/home/Home.jsx"
import CreateRecipe from './components/creation/creation';
import Detail from './components/detail/detail';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/recipe' element={<CreateRecipe/>}/>
          <Route exact path='/home/:id' element={<Detail/>}/> 
        </Routes>   
        </div>
     </BrowserRouter>
  );
}

export default App;
