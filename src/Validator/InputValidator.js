const InputValidator = {
  validateMoney(value) {
    this.isNumber(value);
    this.isDivideByUnit(value);
    return value;
  },
  isNumber(value) {
    if (Number.isNaN(value)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  },
  isDivideByUnit(value) {
    if (value % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
  }
};

export default InputValidator;