// sum(2)(4)(5)(6)();
// 17

// sum(1)(2)();
// 3

export function currying(num){
    return function (anotherNum) {
        if (anotherNum) {
            return currying(num + anotherNum);
        } else {
            return num;
        }
    }
}
