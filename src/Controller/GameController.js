import OutputView from "../View/OutputView.js";

class GameController {
  constructor() {
    this.startGame();
  }

  startGame() {
    OutputView.printGameStart();
  }
}

export default GameController;