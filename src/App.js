import InputView from "./View/InputView.js";
import InputValidator from "./Validator/InputValidator.js";
import OutputView from "./View/OutputView.js";
import Lotto from "./Lotto.js";
import generateLotto from "./util/generateLotto.js";

class App {
  #lottos = [];

  async play() {
    const money = await this.#getMoney();
    this.#buyLotto(money);
    const luckyNumbers = await this.#getLuckyNumbers();
    const bonusNumber = await this.#getBonusNumber(luckyNumbers);
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

  // 2. 로또를 구매한다.
  #buyLotto(money) {
    const lottoCount = this.#calculateLottoCount(money);
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = generateLotto();
      this.#printLottoNumbers(lottoNumbers);
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  // 2-1. 구매할 로또 수량을 계산한다.
  #calculateLottoCount(money) {
    const count = Math.floor(money / 1000);
    this.#printLottoCount(count);
    return count;
  }

  // 2-2. 구매한 로또 수량을 출력한다.
  #printLottoCount(count) {
    OutputView.printLottoCount(count);
  }

  // 2-3. 구매한 로또 번호를 출력한다.
  #printLottoNumbers(lottoNumbers) {
    OutputView.printLottoNumbers(lottoNumbers);
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

  // 1-3. 보너스 번호를 입력 받는다.
  async #getBonusNumber(luckyNumbers) {
    try {
      const bonusNumber = InputValidator.validateBonusNumber(await InputView.getBonusNumber(), luckyNumbers);
      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getBonusNumber(luckyNumbers);
    }
  }
}

export default App;
