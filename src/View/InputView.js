import { Console } from "@woowacourse/mission-utils";

// 1. 사용자의 입력을 받는다.
const InputView = {
  async getMoney() {
    const moeny = Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return moeny;
  },
  async getLuckyNumbers() {
    const luckyNumber = Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return luckyNumber;
  },
  async getBonusNumber() {
    const bonusNumber = Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  }
};

export default InputView;