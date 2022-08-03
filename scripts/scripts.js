// Task 1

// const mas = ['a', 'b', 'c'];
// const num = [1, 2, 3];
// const all = [...mas,...num];
// all;
// console.log(all);

// Task 2

// push

// const letters = ['a', 'b', 'c'];
// letters.push (1,2,3);
// console.log(letters);

//splice

// const lett = ['a', 'b', 'c','i','f','g'];
// lett.splice(3,3,1,2,3);
// console.log(lett);

// Task 3

// const numba = [1, 2, 3, 4, 5];
// numba.splice(1,2);
// console.log(numba);

//Task 4

// const numm = [1, 2, 3, 4, 5];
// numm.splice(3,0,'a', 'b', 'c')
// console.log(numm);

// Task 5

// const arr = [1, 2, 3, 4, 5];
// const arr1 =[]
// for (let i = 0; i<arr.length; i++){
//     console.log(arr1.push(arr[i]*10));
// }
// console.log(arr);
// console.log(arr1);

// Task 6

// let i = 4;
// while (i <= 400) {
//     console.log(i);
//     i++;
// }

// Task 7
// let num = 0;
// for (let i=4;i<=13;i++){
//     console.log(num+i);
//     i=i+2;
// }

// Task 8
// let i = 654;
// while (i>-1) {
//     console.log(i);
//     i--;
// }

// Task 9

// let i = 1983;
// while (i <= 2017) {
//     console.log(i);
//     i++;
// }

// Task 10

// for (let i=-4;i<=100;i+=2){
//     console.log(i);
// }

// Task 11
// let sum = 0;
// for(let i =0;i <= 100; i++){
//     sum+=i;
//
// }document.write(sum);
// console.log(sum);

// // Task 12

// let s =prompt('Введите число');
// let arr = [];
// let str = '';
//
// for (let i=0;i<s;i++){
//     str+='x';
//     arr.push(str);
// }
// console.log(arr);

// Task 13

// let s = prompt('Сколько эллементов?');
// let arr = [];
// let str;
// for (var i = 0; i < s; i++) {
//     str = '';
//     for (var j = 0; j <= i; j++) {
//         str += i+1;
//     }
//     arr.push(str);
// }
// console.log(arr);

// Task 14

// let ass = [];
//
// for (let i = 0; i < 11; i++) {
//     let firstAss = [];
//
//     for (let j = 0; j < 11; j++) {
//         let el = j === i - i || j === j - i || i === j - j + 10 || i === i - j + 10 ? "x" : 0;
//         firstAss.push(el);
//     }
//     ass.push(firstAss);
// }
// console.log(ass);


// Task 15

// let ass = [];
// for (i=1;i<=10;i++){
//     let firstAss = [];
//
//     for (j=1;j<=10;j++){
//         let el=j*i;
//         firstAss.push(el);
//     }ass.push(firstAss);
// }console.log(ass);

// Task 16

// function declination() {
//     let bum = +prompt("Введите номер");
//     let kall = ['товар', 'товара', 'товаров'];
//     if (bum % 100 > 4 && bum % 100 < 20) {
//         return kall[2];
//     } else if (bum % 10 > 1 && bum % 10 < 5) {
//         return kall[1];
//     } else if (bum % 10 > 0 && bum % 10 < 2) {
//         return kall[0];
//     } else if (bum % 10 >= 0 && bum % 10 <= 0) {
//         return kall[2];
//     }
// }
//
// console.log(declination());