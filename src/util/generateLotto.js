import { Random } from "@woowacourse/mission-utils";

const generateLotto = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  // 로또 번호는 오름차순으로 정렬
  return lottoNumbers.sort((a, b) => a - b);
};

export default generateLotto;