import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
  const [isopen, setIsopen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(e.target)) {
        setIsopen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsopen(!isopen);
  };

  const handleOptionClick = (option) => {
    //closed DropDown
    setIsopen(false);
    //what option did the user click on??
    onChange(option);
  };

  const icon = (
    <span className="text-2xl">
      {isopen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  const renderDropDown = options.map((option) => {
    return (
      <div
        className="dropdown hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.lable}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="dropdown flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value ? value.lable : "select..."}
        {icon}
        {/* // {selection?.lable||'select...'} is true */}
      </Panel>

      {isopen && <Panel className="absolute top-full ">{renderDropDown}</Panel>}
    </div>
  );
}

export default DropDown;
