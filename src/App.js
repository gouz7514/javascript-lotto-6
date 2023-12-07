import InputView from "./View/InputView.js";
import InputValidator from "./Validator/InputValidator.js";
import OutputView from "./View/OutputView.js";

class App {
  async play() {
    const money = await this.#getMoney();
    const luckyNumbers = await this.#getLuckyNumbers();
  }

  // 1-1. 로또 구입 금액을 입력받는다.
  async #getMoney() {
    try {
      const money = InputValidator.validateMoney(await InputView.getMoney());
      return Number(money);
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getMoney();
    }
  }

  // 1-2. 당첨 번호를 입력 받는다.
  async #getLuckyNumbers() {
    try {
      const luckyNumbers = InputValidator.validateLuckyNumbers(await InputView.getLuckyNumbers());
      return luckyNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getLuckyNumbers();
    }
  }
}

export default App;
