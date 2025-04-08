import { useState } from "react";
import Square from "./square";
export default function Board() {

   const [player, setPlayer] = useState("X")
   const [boardState, setBoardStatte] = useState(Array(9).fill(null))

   function handleclickCount(position, value)
   {
    console.log({position, value})
    if(boardState[position] !== null ){
      return
    }

    //if boxes already clicked do nothing 

    let newState = boardState
    newState[position] = value
    setBoardStatte(newState)
    console.log(`newState : ${boardState}`)
    const winner =  calculateWinner(newState)
    console.log(`Player winner: ${winner}`)
    if(winner != null) {

      // stop game and declare winner

      alert(winner)
    } else {
      setPlayer(player === "X"? "O" : "X")
      console.log(`Player clicks: ${player}`)
    }

   }
   
  return (
    <>

      <div className="main">
        <div className="board-row">
          <Square handleclickCount={handleclickCount} position={0} player={player}/>
          <Square handleclickCount={handleclickCount} position={1} player={player}/>
          <Square handleclickCount={handleclickCount} position={2} player={player}/>
        </div>
        <div className="board-row">
         <Square handleclickCount={handleclickCount} position={3}  player={player}/>
         <Square handleclickCount={handleclickCount} position={4}  player={player}/>
         <Square handleclickCount={handleclickCount} position={5}  player={player}/>
        </div>
        <div className="board-row">
         <Square handleclickCount={handleclickCount} position={6}  player={player}/>
         <Square handleclickCount={handleclickCount} position={7}  player={player}/>
         <Square handleclickCount={handleclickCount} position={8}  player={player}/>
        </div>
      </div>

    </>
  );
}

function calculateWinner(boardState)
{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  
  console.log(`state printed ${boardState}`)
  for(let i = 0; i < lines.length; i++)
  {
    const [a, b, c] = lines[i];
    // console.log(`state lines ${lines[i]}`)
    if(boardState[a] && boardState[a] == boardState[b] && boardState[a] == boardState[c])
    {
      return boardState[a]
    }
  }
  return null
}