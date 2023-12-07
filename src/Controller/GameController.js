class GameController {
  #result = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  calculateResult(rank) {
    this.#result[rank] += 1;
  }

  getResult() {
    const result = Object.entries(this.#result).sort((a, b) => b[0] - a[0]);
    return result;
  }
}

export default GameController;