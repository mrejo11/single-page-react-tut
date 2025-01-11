import { GoPlus, GoX } from "react-icons/go";

import { useState } from "react";

function Accordion({ items }) {
  const [expandIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex)=>{
        if(currentExpandedIndex === nextIndex){
            return -1;
        }else{
            return nextIndex;
        }
    })
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandIndex;

    const icon = (
      <span className="text-2xl font-thin">
        {isExpanded ? <GoX /> : <GoPlus />}
      </span>
    );

    return (
      <div className="mr-3 mt-1 font-primary text-sm" key={item.id}>
        <div
          className={
            isExpanded
              ? "flex  cursor-pointer p-7 rounded-b-md border-b  hover:rounded forced-colors:bg-blue-400 bg-blue-500 m-1 text-sm "
              : "flex cursor-pointer hover:bg-slate-300 p-7 hover:rounded-md"
          }
          onClick={() => handleClick(index)}
        >
          {icon}
          {item.lable}
        </div>
        <div className="accordion-content pt-3 pr-2 leading-6 bg-blue-300">
          {isExpanded && <div className="border-r border-gray-600 pr-3">{item.content}</div>}
        </div>
      </div>
    );
  });
  return <div>{renderItems}</div>;
}

export default Accordion;

/* <div>{!isExpanded?null:item.content}</div> */
// {isExpanded && <div className="font-primary bg-blue-500">{item.content}</div>}
