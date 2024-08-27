import { PlayerScore } from "./playerscore";
import { useState } from "react";
import { GetShapesDropped } from "/Users/tpl1122_1/Desktop/techtonica-assignments/tetris-in-react/javascript.jsx";

export function TopFiveScores() {
  const [shapesDropped, setShapesDropped] = useState(0);

  function updateShapesDropped() {
    setShapesDropped(GetShapesDropped());
  }

  setInterval(updateShapesDropped, 500);
  

  return (
    <>
      <div class="top-five-scores">
        <ol>
          <p>Shapes dropped: {shapesDropped} </p>
          <PlayerScore initials="ABC" score="1000"/>
        </ol>
      </div>
    </>
  );
}
