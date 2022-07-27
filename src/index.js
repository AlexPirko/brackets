module.exports = function check(str, bracketsConfig) {
  
  let stack = [];
  let brackets = {
    [')']: '(',
    [']']: '[',
    ['}']: '{'
  };

  if (str.length % 2 != 0) {
  return false;
  } else {

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if(isClosedBracket(current)) {
      if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }}

  if (stack.length === 0) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      const final = bracketsConfig[j];
  
      if(isClosedBracket(final)) {
        if (brackets[final] !== stack.pop()) return false;
      } else {
        stack.push(final)
      }
  }
    return true;
}
    function isClosedBracket (chk) {
      return [')', ']', '}'].indexOf(chk) > -1;
    }
}

