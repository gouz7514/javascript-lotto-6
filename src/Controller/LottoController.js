import OutputView from "../View/OutputView.js";
import Lotto from "../Lotto.js";
import generateLotto from "../util/generateLotto.js";

class LottoController {
  #lottos = [];

  buyLotto(money) {
    const lottoCount = this.#calculateLottoCount(money);
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = generateLotto();
      this.#printLottoNumbers(lottoNumbers);
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }

    return this.#lottos;
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
}

export default LottoController;