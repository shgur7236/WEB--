// const qdqd = {
//     sayJS() {
//         console.log('Js');
//     },
//     sayNode,
//     [es+6]: 'fantastic',
// };
// newObject.sayNode();
// newObject.sayJS();
// console.log(newObject.ES6);

// var num1 = 1;
// var num2 = 2;
// var re = 3;
// var str1 = num1+'더하기'+num2+'는 \''+re+'\'';
// console.log(str1);

// const num3 = 1;
// const num4 = 2;
// const re2 = 3;
// const str2 = `${num3}더하기${num4}는'${re2}'`;
// console.log(str);

// var saynode = function() {
//     console.log('node');
// };
// var es = 'es';
// var oldobject = {
//     sayjs: function() {
//         console.log('js');
//     },
//     saynode: saynode,
// };
// oldobject[es+6] = 'fantastic';
// oldobject.saynode();
// oldobject.sayjs();
// console.log(oldobject.es6);

// var saynode = function() {
//     console.log('node');
// }
// var es = 'ES';
// const newobject = {
//     sayjs() {
//         console.log('js');
//     }, 
//     saynode,
//     [es+6]: 'fantastic',
// };
// newobject.saynode();
// newobject.sayjs();
// console.log(newobject.ES6);

// var relationship1 = {
//     name: 'zero',
//     friends: ['zeor','heor','xero'],
//     logFriends: function() {
//         var that = this;
//         this.friends.forEach(function (friends) {
//             console.log(that.name, friends);
//         });
//     },
// };
// relationship1.logFriends();

// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve('성공');
//     } else {
//          reject('실패');
//     }
// });

// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('무조건');
//     });

const rand = Math.floor(Math.random() * 51);
console.log(rand);
const promise = new Promise((resolve,resolve2,reject) => {
    if(rand > 25) {
        resolve('25보다크다');
    } else if(rand<=25) {
        resolve2('25보다작거나같다');
    }
    else {
        reject('마법');
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('.빠빰.');
    })    