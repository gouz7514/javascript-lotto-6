import LottoValidator from "./LottoValidator.js";

const Validator = {
  validateMoney(value) {
    this.isPositiveNumber(value);
    this.isDivideByUnit(value);
    return Number(value);
  },
  validateLuckyNumbers(value) {
    const luckyNumbers = value.split(",").map((v) => Number(v));
    this.validateArray(luckyNumbers, this.isPositiveNumber);
    LottoValidator.isLottoLength(luckyNumbers);
    this.validateArray(luckyNumbers, LottoValidator.isLottoNumberRange);
    this.isRepeat(luckyNumbers);
    return luckyNumbers;
  },
  validateBonusNumber(value, luckyNumbers) {
    this.isPositiveNumber(value);
    LottoValidator.isLottoNumberRange(value);
    this.isBonusInLucky(value, luckyNumbers);
    return Number(value);
  },
  validateArray(array, callback) {
    array.forEach((value) => {
      callback(value);
    });
  },
  // 숫자인지 검증
  isPositiveNumber(value) {
    if (Number.isNaN(Number(value)) || Number(value) < 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  },
  // 1,000원 단위인지 검증
  isDivideByUnit(value) {
    if (Number(value) % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
  },
  // 중복된 숫자가 있는지 검증
  isRepeat(luckyNumbers) {
    const set = new Set(luckyNumbers);
    if (set.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  },
  // 보너스 숫자가 당첨 번호에 있는지 검증
  isBonusInLucky(value, luckyNumbers) {
    if (luckyNumbers.includes(Number(value))) {
      throw new Error("[ERROR] 보너스 숫자가 당첨 번호에 있습니다.");
    }
  }
};

export default Validator;