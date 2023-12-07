import { Console } from "@woowacourse/mission-utils";
import { LOTTO_RESULT } from "../constant/constant.js";

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
  },
  // 3-2. 당첨 통계를 출력한다.
  printGameResult(result) {
    result.forEach(([rank, count]) => {
      const matchString = LOTTO_RESULT[rank].match.map((item) => item.concat(' 일치')).join(', ');
      const prize = LOTTO_RESULT[rank].prize.toLocaleString();
      Console.print(`${matchString} (${prize}원) - ${count}개`);
    });
  }
};

export default OutputView;