<<<<<<< HEAD
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./component/Home";
import AccordionPage from "./pages/AccordionPage"
import DropDownPages from "./pages/DropDownPages"
import Navigation from "./component/Navigation";

=======
import { BrowserRouter,Routes,Route, } from "react-router";
import Home from "./component/Home";
import AccordionPage from "./pages/AccordionPage"
import DropDownPages from "./pages/DropDownPages"
import Navigation from "./component/navigation"
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
>>>>>>> 468a9b32864e0ba4f2ed7dcc65a07e9bc2b28b08
function App() {
  

  return (
 <BrowserRouter>
<<<<<<< HEAD
 <Navigation />
=======
  <Navigation />
>>>>>>> 468a9b32864e0ba4f2ed7dcc65a07e9bc2b28b08
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






