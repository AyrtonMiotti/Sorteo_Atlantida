let DNI =  "45095310"
asd = "*****"
var newDNI = DNI.split("");


for(let i=5; i<8; i++){
    asd += newDNI[i]
}

console.log(asd);



/*
var cant = (sec.length - 3);

asd = []
console.log('----------------')
for(let i = 0; i<cant; i++){
    asd += newDNI[i].replace(sec[i], '*')
    console.log(asd)
}
console.log('----------------')


console.log(DNI)
console.log(sec)
console.log(asd);
*/