class Tile {
  constructor(type) {
    this.type = type;
    this.player = null;
    this.up = null;
    this.down = null;
    this.right = null;
    this.left = null;
  }

  setUp(xCoordinate, yCoordinate) {
    if (xCoordinate >= 0) {
      this.up = { x: xCoordinate, y: yCoordinate };
    }
  }

  setDown(xCoordinate, yCoordinate) {
    if (xCoordinate < 5) {
      this.down = { x: xCoordinate, y: yCoordinate };
    }
  }

  setRight(xCoordinate, yCoordinate) {
    if (yCoordinate < 5) {
      this.right = { x: xCoordinate, y: yCoordinate };
    }
  }

  setLeft(xCoordinate, yCoordinate) {
    if (yCoordinate >= 0) {
      this.left = { x: xCoordinate, y: yCoordinate };
    }
  }

  setPlayer(player) {
    this.player = player;
  }
}

export default Tile;
