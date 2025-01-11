import { useState } from "react";
import DropDown from "../component/DropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };
  const options = [
    { lable: "red", value: "red" },
    { lable: "Green", value: "green" },
    { lable: "blue", value: "blue" },
  ];
  return (
    <div className="flex">
          <DropDown
      options={options}
      value={selection}
      onChange={handleSelection} />
    </div>

  );
}

export default DropDownPage ;
