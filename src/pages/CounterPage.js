import { useReducer } from "react";
import Button from "../component/Button";
import Panel from "../component/Panel";


const INCREMENT_COUNT='increment'
const SET_VALUE_TO_ADD='change-value-to-add'
const DECREMENT_COUNT='decrement'
const ADD_VALUE_TO_COUNT='add_value_to_count'
//هرچیزی که این تابع برگردونه استیت ما خواهد بود
const reducer = (state, action) => {
  switch (action.type){
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };//...
      case DECREMENT_COUNT:
        return{
          ...state,
          count:state.count-1
        }

      case ADD_VALUE_TO_COUNT:
        return{
          ...state,
          count:state.count+state.valueToAdd,
          valueToAdd:0
        }
      case SET_VALUE_TO_ADD:
        return {
          ...state,
          valueToAdd:action.payload
        }

      
        default:
          return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd,setValueToAdd]=useState(0)
  const [state, dispach] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const incerment = () => {
    dispach({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispach({
      type:DECREMENT_COUNT
    })
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value || 0);

    
    dispach({
      type:SET_VALUE_TO_ADD,
      payload:value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispach({
      type:ADD_VALUE_TO_COUNT
    })
  };
  return (
    <Panel className="m-3">
      <h1 className="text-cyan-400 ml-4 text-lg">Count is {state.count}</h1>
      <div className="flex ">
        <Button onClick={incerment}>incerment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        ></input>
        <Button>add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
