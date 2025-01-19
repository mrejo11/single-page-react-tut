import { BrowserRouter,Routes,Route, } from "react-router";
import Home from "./component/Home";
import AccordionPage from "./pages/AccordionPage"
import DropDownPages from "./pages/DropDownPages"
import Navigation from "./component/navigation"
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
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
    <Route path="/Counter" element={<CounterPage initialCount={10} />} />
  </Routes>
 </BrowserRouter>
  )
}

export default App;

