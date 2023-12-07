export const FIRST = '1';
export const SECOND = '2';
export const THIRD = '3';
export const FOURTH = '4';
export const FIFTH = '5';

export const LOTTO_RANK = {
  6: FIRST,
  5: {
    true: SECOND,
    false: THIRD,
  },
  4: FOURTH,
  3: FIFTH,
};

export const LOTTO_RESULT = {
  '5': {
    match: ['3개'],
    prize: 5000,
  },
  '4': {
    match: ['4개'],
    prize: 50000,
  },
  '3': {
    match: ['5개'],
    prize: 1500000,
  },
  '2': {
    match: ['5개', '보너스 볼'],
    prize: 30000000,
  },
  '1': {
    match: ['6개'],
    prize: 2000000000,
  },
};