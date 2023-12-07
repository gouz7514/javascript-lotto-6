import Validator from "./Validator/Validator.js";
import LottoValidator from "./Validator/LottoValidator.js";

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
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
