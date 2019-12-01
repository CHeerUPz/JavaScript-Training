function rot13(str) {
  
  let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let cypher = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
  let strS = str.split(' ');                                
  let strFinal = [[]];
  
  for (let i = 0; i < strS.length; i++) {
    let strD = strS[i].split('');                            
    for (let j = 0; j < strD.length; j++) {
      for (let k = 0; k < abc.length; k++) {
        if (strD[j] == abc[k]) {
          strFinal[i].push(cypher[k]);                        
        }
      }
    } 
    strFinal[i] = strFinal[i].join('');                       
  }
  strFinal = strFinal.join(' ');                              
  console.log(strFinal);

  return strFinal;
}

rot13('SERR PBQR PNZC');
