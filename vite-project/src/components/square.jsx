import React from "react";
import { useState } from "react";



function Square({handleclickCount, position, player}) {
  const [value, setValue] = useState(null);

  function handleAdd() {
    
    // if(value)
    // { 
    //   console.log(value)
    //   return
    // }
    setValue(player);
    console.log({player})
    handleclickCount(position, player);
    console.log(`Cell Clicked: ${value}`)

  }

  const addtional_class = value !== null ? " redClass": " "
  return (
    <>
    
      <button  className={`square${addtional_class}`} onClick={() => { handleAdd(); }} >
        {value?value:" "}
      </button>

    </>
  );
}
export default Square