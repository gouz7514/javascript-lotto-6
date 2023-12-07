import { LOTTO_RESULT } from "../constant/constant.js";

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

  getProfitRate(money) {
    const totalPrize = this.#getTotalPrize();
    const profitRate = (totalPrize / money) * 100;
    return profitRate.toFixed(1);
  }

  #getTotalPrize() {
    const totalPrize = Object.entries(this.#result).reduce((acc, cur) => {
      const [rank, count] = cur;
      const { prize } = LOTTO_RESULT[rank];
      return acc + count * prize;
    }, 0);
    return totalPrize;
  }
}

export default GameController;