import React, { useState, useEffect } from "react";
import Tile from "../models/Tile";
import { Button } from "reactstrap";
import useKeyPress from "react-use-keypress";

const Grid = () => {
  const initialGrid = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const newGrid = initialGrid.map((row, x) => {
    return row.map((col, y) => {
      const tile = new Tile(null);
      tile.setUp(x - 1, y);
      tile.setDown(x + 1, y);
      tile.setLeft(x, y - 1);
      tile.setRight(x, y + 1);
      if (x === 4 && y === 2) {
        tile.setPlayer("Player");
      }
      return tile;
    });
  });
  const [grid, setGrid] = useState([...newGrid]);
  const [playerPosition, setPlayerPosition] = useState({ x: 4, y: 2 });
  const [warning, setWarning] = useState("");

  const moveDirection = (dir) => {
    let direction = grid[playerPosition.x][playerPosition.y];
    if (dir === "up" && direction.up !== null) {
      direction = direction.up;
    } else if (dir === "down" && direction.down !== null) {
      direction = direction.down;
    } else if (dir === "left" && direction.left !== null) {
      direction = direction.left;
    } else if (dir === "right" && direction.right !== null) {
      direction = direction.right;
    } else {
      return setWarning("choose a different direction");
    }

    setWarning("");
    const currentTile = grid[playerPosition.x][playerPosition.y];
    currentTile.setPlayer(null);
    setPlayerPosition({ x: direction.x, y: direction.y });
    grid[direction.x][direction.y].setPlayer("Player");
    return setGrid([...grid]);
  };

  useKeyPress("ArrowUp", () => moveDirection("up"));
  useKeyPress("w", () => moveDirection("up"));
  useKeyPress("ArrowDown", () => moveDirection("down"));
  useKeyPress("s", () => moveDirection("down"));
  useKeyPress("ArrowLeft", () => moveDirection("left"));
  useKeyPress("a", () => moveDirection("left"));
  useKeyPress("ArrowRight", () => moveDirection("right"));
  useKeyPress("d", () => moveDirection("right"));
  
  return (
    <div>
      <div className="grid">
        {grid.map((row, x) => {
          return row.map((col, y) => {
            return (
              <div
                key={y}
                className="border d-flex justify-content-center align-items-center"
              >
                {col.player}
              </div>
            );
          });
        })}
      </div>
      <div>
        <Button onClick={() => moveDirection("up")}>Move UP</Button>
        <Button onClick={() => moveDirection("down")}>Move DOWN</Button>
        <Button onClick={() => moveDirection("left")}>Move LEFT</Button>
        <Button onClick={() => moveDirection("right")}>Move RIGHT</Button>
      </div>
      <p>{warning}</p>
    </div>
  );
};

export default Grid;
