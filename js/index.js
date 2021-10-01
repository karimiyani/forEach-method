const num = [10, 20, 30, 40];
for (let index of num ) console.log(index);
// 10
// 20
// 30
// 40

// *********forEeach**********
num.forEach (function (number){
    console.log(number);
});
// 10
// 20
// 30
// 40

// write with arrow function
num.forEach((number) => console.log(number));


// example 2
const users = [
    { name : "gomnam" , age : 100},
    { name : "ammar" , age : 98},

];
users.forEach((user) => console.log(user));
// {name: 'gomnam', age: 100}
// {name: 'ammar', age: 98}
users.forEach((user) => console.log(user.name , user.age));
// gomnam 100
// ammar 98

