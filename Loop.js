// for(let i=1;i<=5;i++){
//     console.log("Satyam Tiwari");
// }

//for-of=================

// let str="Satyam";
// for(let i of str){
//     console.log("i= ",i);
// }


//for-in==================use to object===


// let student={
//     name:"satyam",
//     age:40,
//     cgpa:7.4,
//     isPass:true,
// }

// for(let i in student){
//     console.log("Key= ",i," Value= ",student[i]);
// }



//Practice Question=====================

// let num=prompt("Enter the number: ");

// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         console.log("Even number is ",i);
//     }
// }






// let a=5;
// while(true){
//     let b=prompt("Enter the guessing number: ");

//     if(a==b){
//         console.log("Congratulation you guess right number: ",b);
//         break;
//     }
//     else{
//         console.log("You enter wrong number guess again: ");
//     }
// }





let fullname=prompt("Enter your fulname without apaces:- ");

let username="@"+fullname+fullname.length;
console.log(username);
