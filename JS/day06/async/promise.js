// state: pending -> fulfilled or rejected
// 1. producer
// promise 를 생성하는 순간에 자동으로 실행

new PromiseRejectionEvent(() => {
    console.log("doing somthing...");
});

const Promise =  new Promise(((resolve, reject)) => {
    console.log("doing somthing one two...");
});
const Promise =  new Promise(((resolve, reject)) => {
    console.log("doing somthing...");
    setTimeout(() => {
        resolve('adam');        // 실행이 정상적으로 완료되면 resolve
    }, 2000);
});
//  ================================
Promise.then((value) => {
    console.log(value);
});
// resolve()가 전달한 값 'adam'을 then()을 통해서 받아온다

let promise = new Promise((resolve, reject) => {
    console.log("doing somthing...");
    setTimeout(() => {
        // resolve('scott');
        reject(new Error('no network'));        // 실행이 정상적으로 완료되면 resolve
    }, 2000);
})
Promise
.then((resData) => {
    console.log(resData);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Run unconditionally!!');
});

let fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 1);   // 5
        }, 1000);
    });
}).then(num => console.log(num));

// Error
let getHan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🦢');
        }, 1000);
    });
}
let getEgg = (hen) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🥚');
        }, 1000);
    });
}
getHan()
    .then(hen => getEgg(hen))
    .then(meal => console.log(meal));