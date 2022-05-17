import React,{useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushi, setSushi]= useState([])
  const [money,setMoney] = useState(100);
  




  useEffect(() =>{
    fetch(API)
    .then((r) =>r.json())
    .then((data)=>{
      setSushi(data)
      })
  },[])
  
function halfEatenSushi(piece){
  const remainingMoney = money - piece.price;
  if(!piece.eaten && remainingMoney >= 0)
setMoney(remainingMoney)
console.log(money)
setSushi(sushi.map(sushi => sushi.id === piece.id ? {...sushi, eaten : true} : sushi))
  }
  

  
  return (
    <div className="app">
      <SushiContainer 
       sushi={sushi}
       halfEatenSushi={halfEatenSushi}
       
     
      
      />
      <Table  
      plates={sushi.filter(sushi => sushi.eaten)}
      money={money}
      />
    </div>
  );
}

export default App;
