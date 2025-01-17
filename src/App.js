import { BrowserRouter,Routes,Route, } from "react-router";
import Home from "./component/Home";
import AccordionPage from "./pages/AccordionPage"
import DropDownPages from "./pages/DropDownPages"
import Navigation from "./component/navigation"
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
function App() {
  
  return (
 <BrowserRouter>
  <Navigation />
  <Routes>
    <Route index element={<Home />} />
    <Route path="/accordion" element={<AccordionPage />} />
    <Route path="/dropDown" element={<DropDownPages />} />
    <Route path="/modal" element={<ModalPage />} />
    <Route path="/table" element={<TablePage />} />
  </Routes>
 </BrowserRouter>
  )
}

export default App;