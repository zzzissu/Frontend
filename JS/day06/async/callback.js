// syncgronous
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// async
console.log('1');
setTimeout(() => {          // 브라우저 API
    console.log('2');
}, 2000);
console.log('3');

function printImmedi(print) {
    print(): printImmedi(() => console.assert("Hello!"));
}
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}
printDelay(() => console.log('async callback'), 4000);