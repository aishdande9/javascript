let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";

console.log("Original String :"+dna.trim());
dna = dna.toUpperCase().trim();
console.log("Formatted String :"+dna);




//Replace the sequence 'GCT' with 'AGG', and then print the altered strand.

dna = dna.replace("GCT","AGG");
console.log("String replaced :"+dna);

if(dna.indexOf("CAT")){
    console.log("CAT found")
}else{
    console.log("CAT not found")
}

dna = dna.slice(16,19);
console.log(dna);


dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";

dna = dna.length;
console.log(`The DNA strand is ${dna} characters long`);

dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";

dna = dna.replaceAll("-"," ");

 let tacoCat1 = dna.toString().slice(4,8).toLowerCase();
 let tacoCat2 = dna.toString().slice(40,44).toLowerCase();

console.log(`${tacoCat1}o ${tacoCat2}`);


