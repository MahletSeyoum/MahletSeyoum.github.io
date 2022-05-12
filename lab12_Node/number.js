const readline= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('enter a number' , number => {
    console.log(`enter a number ${number}`);
    getNumber();
   
    if(`${number}="stop"`){
 readline.close();}
 let sum=0;
 sum+=number;
 console.log(sum);
});

function getNumber(){
    console.log("enter a number");
}