function convertToRoman(num) = {

  function oneToNine(type, number) {
    
    let letter1 = '';
    let letter2 = '';
    let letter3 = '';
  
    if (type == 0) {
      letter1 = 'I';
      letter2 = 'V';
      letter3 = 'X';
    } else if (type == 1) {
      letter1 = 'X';
      letter2 = 'L';
      letter3 = 'C';
    } else if (type == 2) {
      letter1 = 'C';
      letter2 = 'D';
      letter3 = 'M';
    } else if (type == 3) {
      if (number == 1) {
        return 'M';
      } else if (number == 2) {
        return 'MM';
      } else if (number == 3 {
        return 'MMM;
      } else if (number == 4 {
        return 'MMMM';
      } else if (number == 5 {
        return 'MMMMM';
      }
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
  let divRev = num.toString().split('').map(Number).reverse();
  
  for (let i = 0; i < divRev.length; i++) {
    roman.push(oneToNine(i, divRev[i]));
  }
  
  roman = roman.reverse().join('');
  
  return roman;
}

convertToRoman(1984);
