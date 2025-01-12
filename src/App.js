import { BrowserRouter,Routes,Route, } from "react-router";
import Home from "./component/Home";
import AccordionPage from "./pages/AccordionPage"
import DropDownPages from "./pages/DropDownPages"
import Navigation from "./component/navigation"
function App() {
  
  return (
 <BrowserRouter>
  <Navigation />
  <Routes>
    <Route index element={<Home />} />
    <Route path="/accordion" element={<AccordionPage />} />
    <Route path="/dropDown" element={<DropDownPages />} />
  </Routes>
 </BrowserRouter>
  )
}

export default App;
