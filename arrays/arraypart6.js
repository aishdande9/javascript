let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];


  let arrayTable  = [];

  arrayTable.push(element1);
  arrayTable.push(element2);
  arrayTable.push(element26);

  console.log(arrayTable);

  console.log(arrayTable[1]);
  console.log(arrayTable[1][1]);

  console.log(arrayTable[0][2]);
  console.log(arrayTable[1][0]);
  console.log(arrayTable[2][1]);

arrayTable = [['hydrogen', 'H', 1.008],['helium', 'He', 4.003],['iron', 'Fe', 55.85]];
console.log("-------------------Elements-----------------------------")

console.log(arrayTable[0][0]+"\n"+arrayTable[0][1]+"\n"+arrayTable[0][2]+"\n"+arrayTable[1][0]+"\n"+arrayTable[1][1]+"\n"+arrayTable[1][2]+"\n"+arrayTable[2][0]+"\n"+arrayTable[2][1]+"\n"+arrayTable[2][2]);
