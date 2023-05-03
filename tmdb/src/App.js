import "./Css/App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import SignIn from "./Pages/SignIn";


function App() {
 
  return (
   <>
   <Navbar></Navbar>
   <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/sign" element={<SignIn></SignIn>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
    </Routes>
   </>
    
  );
}

export default App;
