import InputView from "./View/InputView.js";
import Validator from "./Validator/Validator.js";
import OutputView from "./View/OutputView.js";
import LottoController from "./Controller/LottoController.js";

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }

  async play() {
    const money = await this.#getMoney();
    const lottos = this.#lottoController.buyLotto(money);
    const luckyNumbers = await this.#getLuckyNumbers();
    const bonusNumber = await this.#getBonusNumber(luckyNumbers);
  }

  // 1-1. 로또 구입 금액을 입력받는다.
  async #getMoney() {
    try {
      const money = Validator.validateMoney(await InputView.getMoney());
      return money;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getMoney();
    }
  }

  // 1-2. 당첨 번호를 입력 받는다.
  async #getLuckyNumbers() {
    try {
      const luckyNumbers = Validator.validateLuckyNumbers(await InputView.getLuckyNumbers());
      return luckyNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getLuckyNumbers();
    }
  }

  // 1-3. 보너스 번호를 입력 받는다.
  async #getBonusNumber(luckyNumbers) {
    try {
      const bonusNumber = Validator.validateBonusNumber(await InputView.getBonusNumber(), luckyNumbers);
      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getBonusNumber(luckyNumbers);
    }
  }
}

export default App;
