const start = 10;
const end = 55;

for(let i = start; i<=end; i++){
    if(i % 3 != 0 && i % 2 === 0 && i !== 16){
        console.log(i)
    }
}