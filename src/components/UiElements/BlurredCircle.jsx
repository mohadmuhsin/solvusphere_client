import React from "react";

function BlurredCircle({bottomRight=false}) {
  const divStyles = {
    borderRadius:'50%',
    border: "10px solid #FFD700",
    background: "rgba(255, 215, 0, 0.44)",
    filter: `blur(${100}px)`,
  };
  

  return (<div style={divStyles} className={`absolute none md:block md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] ${bottomRight?'bottom-[-3rem] right-[-3rem]':'top-[-3rem] left-[-3rem]' } `} ></div>)
}

export default BlurredCircle;
