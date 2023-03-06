/*
usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com
*/

/* 
usr
me
psw
age
loc
fll
*/

// truthy and falsy  truthy and falsy

/* 
Leer el problema
Leer el código
Entender el código -> saber que hace cada función (como funcionan los truthy y falsy, como llamar funciones, estudiar los tipo de datos en JS)
Terminar el problema

hackerRanks

*/

const input1 = "usr:miguel me:mi@gmail.ceom psw:123456 age:22 loc:bcn fll:82";
const input2 =
  "usrl:@midudev me:mi@gmail.ceom psw:123456 age:22 loc:bcn fll:82";

function validateUser(user) {
  const validKeys = ["usr", "me", "psw", "age", "loc", "fll"];

  let amountOfValidUsers = 0;
  const data = user.split(" ");

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const data2 = item.split(":");
    const key = data2[0];
    const value = data2[1];

    const hasValidKey = validKeys.includes(key);
    const hasValidValue = !!value;
    if (hasValidKey && hasValidValue)
      amountOfValidUsers = amountOfValidUsers + 1;
  }

  return amountOfValidUsers === 6;
}

//const isInputValid = validateUser(input1);
//console.log(isInputValid);

//---------------------

const database = `usr:@midudev eme:mi@gmail.com psw:123456 age:38 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com `;


function getAmountOfBots(users) {
  const separador = "\n\n";
  const todo = users.split(separador);
  console.log({todo})
  let counter = 0;
  for(let i= 0; i < todo.length; i++){
    //const info = todo[i];
    //const infoVali = info.split(":");
    //console.log(todo[i]);;
    //const isValidUser = validateUser(infoVali);
    const isValidUser = validateUser(todo[i]);
    console.log({isValidUser});
    if (!isValidUser) {
        counter++;


    }
    //return counter;
    // if(validateUser(todo[i]) === users[i]){
    //     counter++;
    // }
}
return counter;

  
  
}
console.log(getAmountOfBots(database));
console.log(validateUser(database));












// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);

/* 
how does JS work?
Is JS multi-threaded? why or why not?
What is a callback?
What is a promise?
what is async/await?
what is event-loop?


https://chat.openai.com/chat
*/

// const fn1 = () => {
//   console.log("Hello Miguel");
// };

// const fn2 = () => {
//   console.log("Hello Luis");
// };

// fn1();
// fn2();
