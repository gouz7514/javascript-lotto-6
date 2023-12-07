const InputValidator = {
  validateMoney(value) {
    this.isNumber(value);
    this.isDivideByUnit(value);
    return value;
  },
  validateLuckyNumbers(value) {
    const luckyNumbers = value.split(",").map((v) => Number(v));
    this.validateArray(luckyNumbers, this.isNumber);
    this.isLuckyLength(luckyNumbers);
    this.validateArray(luckyNumbers, this.isLuckyRange);
    this.isRepeat(luckyNumbers);
    return luckyNumbers;
  },
  validateArray(array, callback) {
    array.forEach((value) => {
      callback(value);
    });
  },
  // 숫자인지 검증
  isNumber(value) {
    if (Number.isNaN(value)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  },
  // 1,000원 단위인지 검증
  isDivideByUnit(value) {
    if (Number(value) % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
  },
  // 6개의 숫자인지 검증
  isLuckyLength(luckyNumbers) {
    if (luckyNumbers.length !== 6) {
      throw new Error("[ERROR] 6개의 숫자를 입력해주세요.");
    }
  },
  // 1 ~ 45 사이의 숫자인지 검증
  isLuckyRange(value) {
    if (value < 1 || value > 45) {
      throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.");
    }
  },
  // 중복된 숫자가 있는지 검증
  isRepeat(luckyNumbers) {
    const set = new Set(luckyNumbers);
    if (set.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  }
};

export default InputValidator;