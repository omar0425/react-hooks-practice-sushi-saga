import React from "react";

function Sushi({sushi, halfEatenSushi}) {
  
  const { name,img_url, price, eaten} =  sushi
  // function getMatchingId(id){
  //   console.log(id)
  //   setSushi(sushi.map(sushi => sushi.id === id ? {...sushi, eaten : true} : sushi))
  
  // }

  return (
    <div className="sushi">
      <div className="plate" onClick={()=>{halfEatenSushi(sushi)}}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
