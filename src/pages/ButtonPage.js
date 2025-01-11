import Button from "../component/Button";
import { GoBell,GoDatabase } from "react-icons/go";


function ButtonPage() {
   
  return (
    <div>
      <div>
        <Button secondary rounded className='mb-5 mt-5'>
            <GoBell className="mr-1"/>
            Click me!
            </Button>
      </div>
      <div>
        <Button danger outline >
            <GoDatabase className="mr-1"/>
            Buy Now!</Button>
      </div>
      <div>
        <Button warning outline>
        
          See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>Hide Adds!</Button>
      </div>
      <div>
        <Button primary rounded>
        
            Search</Button>
      </div>
    </div>
  );
}

export default ButtonPage;

// function fibonacci(n){
//   const fibo=[0,1]
//   if(n<=1) return n;

//   for(let i=2;i<=n;i++)
//     fibo[i]=fibo[i-1]+fibo[i-2]
//   return fibo[n]
  
// }
// console.log(fibonacci(12))

// function fibonacci(n){
//   if(n<=1)
//     return n;
//   else return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci()) 