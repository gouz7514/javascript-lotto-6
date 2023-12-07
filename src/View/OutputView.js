import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printError(message) {
    Console.print(message);
  },
  printLottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },
  printLottoNumbers(lottoNumbers) {
    Console.print(lottoNumbers);
  },
  printGameStart() {
    Console.print("\n당첨 통계");
    Console.print("---");
  }
};

export default OutputView;