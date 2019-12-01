function convertToRoman(num) = {

  function oneToNine(type, number) {
    
    if (type == 0) {
      let letter1 = 'I';
      let letter2 = 'V';
      let letter3 = 'X';
    } else if (type == 1) {
      let letter1 = 'X';
      let letter2 = 'L';
      let letter3 = 'C';
    } else if (type == 2) {
      let letter1 = 'C';
      let letter2 = 'D';
      let letter3 = 'M';
    } 
    
    if (number == 1) {
      return letter1;
    } else if (number == 2) {
      return letter1 + letter1;
    } else if (number == 3) {
      return letter1 + letter1 + letter1;
    } else if (number == 4) {
      return letter1 + letter2;
    } else if (number == 5) {
      return letter2;
    } else if (number == 6) {
      return letter2 + letter1;
    } else if (number == 7) {
      return letter2 + letter1 + letter1;
    } else if (number == 8) {
      return letter2 + letter1 + letter1 + letter1;
    } else if (number == 9) {
      return letter1 + letter3;
    }
  }
  
  let roman = [];
  let divRev = num.toString().reverse().split('').map(Number);
  
  for (let i = 0; i < divRev.length; i++) {
    roman.push(oneToNine(i, divRev[i]));
  }
  
  roman.reverse().join('');
  
  return roman;
}

convertToRoman(1984);
