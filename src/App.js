import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./component/Home";
import AccordionPage from "./pages/AccordionPage"
import DropDownPages from "./pages/DropDownPages"

function App() {
  
  return (
 <BrowserRouter>
 <Link to="/">Home</Link>
 <br></br>
 <Link to="/accordion">AccordionPage</Link>
 <br></br>
 <Link to="/dropDown">DropDown</Link>
  <Routes>
    <Route index element={<Home />} />
    <Route path="/accordion" element={<AccordionPage />} />
    <Route path="/dropDown" element={<DropDownPages />} />
  </Routes>
 </BrowserRouter>

  
  )
}

export default App;
