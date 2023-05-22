// let favNum = +prompt("Enter Your Favourite Number");
// console.log(favNum + 5 );


// let user1Age = 7;
// let user2Age = 19;

// console.log(user2Age >= 18);


// let user = +prompt("Enter Your Age");
// if(user >= 18){
//     console.log("Congrats you are Now eligibe");
// }else{
//     console.log("you are Not eligibe");
// }


// let userFavNum = +prompt("Enter A num ");
// let computerNum = Math.round(Math.random()*10);

// if(userFavNum === computerNum){
//     console.log("you won "+computerNum);
// }
// else{
//     console.log("You loss "+ computerNum)
// }


// let userInput = prompt("Even or Odd ");
// let computerNum = Math.round(Math.random()*10);

// if(computerNum % 2 === 0 && userInput === "even"){
//     console.log("You Win Even "+ computerNum );
// }
// else if(computerNum % 2 !== 0 && userInput === "odd"){
//     console.log("You Win Odd "+computerNum);
// }
// else{
//     console.log("Enter a valid number");
// }

let num = +prompt("Enter Table num");
for(let i = 1 ;i<=10;i++){
    console.log(num + " * "+ i + " = " + num*i);   
}