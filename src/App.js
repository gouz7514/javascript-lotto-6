import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import Validator from "./Validator/Validator.js";

import LottoController from "./Controller/LottoController.js";
import GameController from "./Controller/GameController.js";

class App {
  #lottoController;
  #gameController;

  constructor() {
    this.#lottoController = new LottoController();
    this.#gameController = new GameController();
  }

  async play() {
    const money = await this.#getMoney();
    const lottos = this.#lottoController.buyLotto(money);
    const luckyNumbers = await this.#getLuckyNumbers();
    const bonusNumber = await this.#getBonusNumber(luckyNumbers);
    this.#startGame(lottos, luckyNumbers, bonusNumber, money);
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

  // 3. 로또 추첨을 진행한다.
  #startGame(lottos, luckyNumbers, bonusNumber, money) {
    OutputView.printGameStart();
    lottos.forEach((lotto) => {
      const rank = lotto.calculateRank(luckyNumbers, bonusNumber);
      if (rank) {
        this.#gameController.calculateResult(rank);
      }
    });
    this.#printGameResult();
    this.#printProfitRate(money);
  }

  // 3-2. 당첨 통계를 출력한다.
  #printGameResult() {
    const gameResult = this.#gameController.getResult();
    OutputView.printGameResult(gameResult);
  }

  // 3-3. 수익률을 출력한다.
  #printProfitRate(money) {
    const profitRate = this.#gameController.getProfitRate(money);
    OutputView.printProfitRate(profitRate);
  }
}

export default App;
