import Validator from "./Validator/Validator.js";
import LottoValidator from "./Validator/LottoValidator.js";
import { LOTTO_RANK } from "./constant/constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateArray(numbers, Validator.isPositiveNumber);
    LottoValidator.isLottoLength(numbers);
    Validator.validateArray(numbers, LottoValidator.isLottoNumberRange);
    Validator.isRepeat(numbers);
  }

  // 3-1. 각 로또의 당첨 등수를 계산한다.
  calculateRank(luckyNumbers, bonusNumber) {
    const matchCount = this.#getMatchCount(luckyNumbers);
    if (matchCount === 5) {
      const isBonusMatch = this.#isBonusMatch(bonusNumber);
      return this.#getRank(matchCount, isBonusMatch);
    }
    return this.#getRank(matchCount);
  }

  // 3-1-1. 당첨 번호와 일치하는 번호의 개수를 계산한다.
  #getMatchCount(luckyNumbers) {
    return this.#numbers.filter((number) => luckyNumbers.includes(number)).length;
  }

  // 3-1-2. 보너스 번호와 일치 여부를 계산한다.
  #isBonusMatch(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  // 3-1-3. 당첨 등수를 계산한다.
  #getRank(matchCount, isBonusMatch = false) {
    if (matchCount === 5) {
      return LOTTO_RANK[matchCount][isBonusMatch];
    }
    return LOTTO_RANK[matchCount];
  }
}

export default Lotto;
