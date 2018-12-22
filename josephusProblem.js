function powerOf2(n) {
 if (typeof n !== 'number')
      return 'Not a number';
    return n && (n & (n - 1)) === 0;
}

function nearstPowOfTwo(n) {
  let np = 2;
  while (n > np) {
    np *= 2;
  }
  return np / 2;
}


function winningSeat(numberOfPoeple) {
  if(powerOf2(numberOfPoeple))
    return 1;
  return 2 * ( numberOfPoeple - nearstPowOfTwo(numberOfPoeple) ) + 1;
}

console.log(winningSeat(8));
