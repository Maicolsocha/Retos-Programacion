const start = 10;
const end = 55;

for(let i = start; i<=end; i++){
    if(i % 3 != 0 && i % 2 === 0 && i !== 16){
        console.log(i)
    }
}


const sstart = 10;
const send = 55;

Array.from({ length: end - start + 1 }, (_, k) => start + k)
  .filter(n => n % 2 === 0 && n !== 16 && n % 3 !== 0)
  .forEach(n => console.log(`${n} i`));