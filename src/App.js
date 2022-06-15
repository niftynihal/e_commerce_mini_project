import './App.css';
import { NavBar } from './Components/NavBar';
import { Routes, Route} from "react-router-dom";
import {Homepage} from "./Pages/Homepage"
import { Shoppage } from './Pages/Shoppage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collections/all" element = {<Shoppage/>}/>
      </Routes>
    </div>
  );
}

export default App;
