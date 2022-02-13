const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const BIN_TABLE = {
  '00': '',
  10: '.',
  11: '-',
};

function decode(expr) {
  let res = [];
  for (let i = 0; i < expr.length; i += 10) {
    res.push(expr.slice(i, i + 10));
  }
  for (let j = 0; j < res.length; j++) {
    if (res[j] === '**********') {
      res[j] = ' ';
    } else {
      res[j] =
        BIN_TABLE[res[j].slice(0, 2)] +
        BIN_TABLE[res[j].slice(2, 4)] +
        BIN_TABLE[res[j].slice(4, 6)] +
        BIN_TABLE[res[j].slice(6, 8)] +
        BIN_TABLE[res[j].slice(8)];
    }
    if (res[j] != ' ') {
      res[j] = MORSE_TABLE[res[j]];
    }
  }

  return res.join('');
}

module.exports = {
  decode,
};
