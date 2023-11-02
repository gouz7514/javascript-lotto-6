import { ERROR_MESSAGE } from "../constants/error.js";
import { LOTTO } from "../constants/constants.js";

class InputValidator {
  // 구입 금액에 대해 검증한다.
  static validateMoney(value) {
    this.isNumber(value, 'money');
    this.isDivideByUnit(value);
    return Number(value);
  }

  // 당첨 번호에 대해 검증한다.
  static validateLuckyNumbers(luckyNumbers) {
    luckyNumbers.every((number) => this.isNumber(number));
    this.isLengthSix(luckyNumbers);
    this.isRepeat(luckyNumbers);
    luckyNumbers.every((number) => this.isValidLottoNumber(number));
    return luckyNumbers;
  }

  // 보너스 번호에 대해 검증한다.
  static validateBonusNumber(bonusNumber, luckyNumbers) {
    this.isNumber(bonusNumber);
    this.isValidLottoNumber(bonusNumber);
    this.isBonusInLuckyNumbers(bonusNumber, luckyNumbers);
    return Number(bonusNumber);
  }

  // 숫자가 아닌 경우 금액, 로또 번호에 대해 예외 처리한다.
  static isNumber(value, type = 'number') {
    const isNumber = Number.isSafeInteger(Number(value));
    if (!isNumber) {
      throw new Error(ERROR_MESSAGE.notNumber[type]);
    }
    return isNumber;
  }

  // 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리한다.
  static isDivideByUnit(value) {
    const isDivideByUnit = value % LOTTO.price === 0;
    if (!isDivideByUnit) {
      throw new Error(ERROR_MESSAGE.notDivideBy1000);
    }
    return isDivideByUnit;
  }

  // 로또 번호가 6개가 아닌 경우 예외 처리한다.
  static isLengthSix(numbers) {
    const isLengthSix = numbers.length === LOTTO.length;
    if (!isLengthSix) {
      throw new Error(ERROR_MESSAGE.notSixLength);
    }
    return isLengthSix;
  }

  // 로또 번호가 중복되는 경우 예외 처리한다.
  static isRepeat(numbers) {
    const isRepeat = new Set(numbers).size !== numbers.length;
    if (isRepeat) {
      throw new Error(ERROR_MESSAGE.isRepeat);
    }
    return isRepeat;
  }

  // 로또 번호가 1 ~ 45 사이가 아닌 경우 예외 처리한다.
  static isValidLottoNumber(number) {
    const isValidLotto = number >= 1 && number <= 45;
    if (!isValidLotto) {
      throw new Error(ERROR_MESSAGE.notValidLotto);
    }
    return isValidLotto;
  }

  // 3-3. 보너스 번호는 당첨 번호와 중복되지 않아야 한다.
  static isBonusInLuckyNumbers(bonusNumber, luckyNumbers) {
    const isBonusInLuckyNumbers = luckyNumbers.includes(bonusNumber);
    if (isBonusInLuckyNumbers) {
      throw new Error(ERROR_MESSAGE.isBonusInLuckyNumbers);
    }
    return isBonusInLuckyNumbers;
  }
}

export default InputValidator;