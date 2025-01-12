import { Link, useLocation } from "react-router";

function Navigation() {
  const location = useLocation();
  return (
    <>
    <div className={location.pathname === "/" ? "mt-2 pr-1 border-r-4 border-blue-500 " : null}>
    <Link to="/" >
        Home
      </Link>
    </div>
    <div className={location.pathname === "/accordion" ? "mt-2 pr-1 border-r-4 border-blue-500" : null}>
    <Link
        to="/accordion"
      >
        AccordionPage
      </Link>
    </div>
      <div className={
          location.pathname === "/dropDown" ? "mt-2 pr-1 border-r-4 border-blue-500" : null
        }>
      <Link
        to="/dropDown"
      >
        DropDown
      </Link>
      </div>
    </>
  );
}
export default Navigation;