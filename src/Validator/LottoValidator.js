const LottoValidator = {
  // 6개의 숫자인지 검증
  isLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  },
  // 1 ~ 45 사이의 숫자인지 검증
  isLottoNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.");
    }
  },
};

export default LottoValidator;