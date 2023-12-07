import InputView from "./View/InputView.js";
import InputValidator from "./Validator/InputValidator.js";
import OutputView from "./View/OutputView.js";

class App {
  async play() {
    const money = await this.#getMoney();
  }

  // 1-1. 로또 구입 금액을 입력받는다.
  async #getMoney() {
    try {
      const money = InputValidator.validateMoney(await InputView.getMoney());
      return money;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getMoney();
    }
  }
}

export default App;
