// Task 1

// function arrayFill(value, length){
//     let arr = [];
//     for (let i=0;i<length;i++){
//         arr.push(value);
//     }
//     return arr;
// }
//
// console.log(arrayFill('x',5));

//Task 2

// function isNumberInRange(){
//     let num = prompt('Введите число');
//     if (num>0&&num<10){
//         return true;
//     }else if (num<0&&num>10){
//         return false;
//     }else {
//         return false;
//     }
// }
//
// console.log(isNumberInRange());

// Task 3

// function isEven() {
//     let number =prompt("Введи число");
//     if ( number % 2 === 0) {
//        return true;
//     } else {
//        return false;
//     }
// }
// console.log(isEven());

// Task 4

// let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// let sss = [];
//
// for (let i = 0; i < arr.length; i++) {
//   if (isEven(i)) {
//     sss.push(i);
//   }
// }
//
// console.log(sss);
//
// function isEven(num) {
//     return num % 2 === 0;



// Task 5

// function degree(num, numStep) {
//     return num ** numStep;
// }
//
// console.log(degree(5,2));
// console.log(degree(12,4));


// Task 6

// function ageYou(){
//     let age=prompt('Сколько вам лет');
//     if (age>=16){
//         return 'Добро пожаловать';
//     }else if(age<16){
//         return 'Вы еще молоды';
//     }else{
//     return 'Введите возраст'};
// }
//
// console.log(ageYou());


// Task 7

// function ageYou(age) {
//     let ageValue
//     ageValue = age || 18;
//     age = 60 - age;
//     return age > 16 ? "Добро пожаловать" :
//         age < 16 ? "Вы еще молоды" :
//               "Введите возраст";
// }
// console.log(ageYou(18));
// console.log(ageYou(12));
// console.log(ageYou());
// console.log(ageYou(undefined));

// Task 8

// let str = "ну шо обсырашки??";
// let strBab = [];
//
// function ucFirst(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
//
// let kek = str.split(' ');
// for (let i = 0; i < kek.length; i++) {
//     strBab.push(ucFirst(kek[i]));
// }
//
// let strSab = strBab.join(" ");
//
// console.log(strBab);
// console.log(strSab);

//Task 9

// let str = "var_text_hello.";
// let strBab = [];
//
// function ucFirst(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
//
// let kek = str.split('_');
// for (let i = 0; i < kek.length; i++) {
//     strBab.push(ucFirst(kek[i]));
// }
//
// let strSab = strBab.join("");
//
// console.log(strBab);
// console.log(strSab);

// Task 10

// let array = [1337,228,14,"Rasseya Givno","Himmars Top",28];
//
// function inArray(elements,array){
//     for (let i=0;i<array.length;i++){
//         if (array[i]===elements){
//             return true;
//         }
//     }return false
// }
//
// console.log(inArray("Himmars Top",array));
// console.log(inArray(16,array));
// console.log(inArray(25,array));
// console.log(inArray("Rasseya Givno",array));



