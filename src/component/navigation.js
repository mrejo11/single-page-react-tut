import { Link, useLocation } from "react-router";

function Navigation() {
  const location = useLocation();
  return (
    <>
    <div className={location.pathname === "/" ? "mt-2 pr-1 border-r-4 border-blue-500 mr-3 " : null}>
    <Link to="/" >
        Home
      </Link>
    </div>
    <div className={location.pathname === "/accordion" ? "mt-2 pr-1 border-r-4 border-blue-500 mr-3" : null}>
    <Link
        to="/accordion"
      >
        AccordionPage
      </Link>
    </div>
      <div className={
          location.pathname === "/dropDown" ? "mt-2 pr-1 border-r-4 border-blue-500 mr-3" : null
        }>
      <Link
        to="/dropDown"
      >
        DropDown
      </Link>
      </div>
      <div className={
          location.pathname === "/modal" ? "mt-2 pr-1 border-r-4 border-blue-500 mr-3" : null
        }>
      <Link
        to="/modal"
      >
        Modal
      </Link>
      </div>
      <div className={
          location.pathname === "/table" ? "mt-2 pr-1 border-r-4 border-blue-500 mr-3" : null
        }>
      <Link
        to="/table"
      >
        Table
      </Link>
      </div>
      <div className={
          location.pathname === "/counter" ? "mt-2 pr-1 border-r-4 border-blue-500 mr-3" : null
        }>
      <Link
        to="/counter"
      >
        Counter
      </Link>
      </div>
    </>
  );
}
export default Navigation;