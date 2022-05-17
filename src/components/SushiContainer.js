import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, setSushi, halfEatenSushi}) {
 
  const[beltPos, setBeltPos] = useState(0)
  const four = 4
  function moreSushi(){
    setBeltPos((beltPos) => (beltPos + four)% sushi.length)
  }
  

  
  const renderSushi = sushi.slice(beltPos, beltPos + four).map(roll => {
    return <Sushi 
    key={roll.id}  
    sushi={roll}  
    setSushi={setSushi} 
    halfEatenSushi={halfEatenSushi}
    />
  })



  return (
    <div className="belt">
      {renderSushi}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
