// ФУНКЦИЯ
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

export function times(y){
    return '*' + y;
}

export function plus(y){
    return '+' + y;
}

export function minus(y){
    return '-' + y;
}

export function dividedBy(y){
    return '/' + y;
}

export function zero(x){
    if (x) {
        return eval(0+x);
    } else {
        return 0;
    }
}

export function one(x){
    if (x) {
        return eval(1+x);
    } else {
        return 1;
    }
}

export function two(x){
    if (x) {
        return eval(2+x);
    } else {
        return 2;
    }
}

export function three(x){
    if (x) {
        return eval(3+x);
    } else {
        return 3;
    }
}

export function four(x){
    if (x) {
        return eval(4+x);
    } else {
        return 4;
    }
}

export function five(x){
    if (x) {
        return eval(5+x);
    } else {
        return 5;
    }
}

export function six(x){
    if (x) {
        return eval(6+x);
    } else {
        return 6;
    }
}

export function seven(x){
    if (x) {
        return eval(7+x);
    } else {
        return 7;
    }
}

export function eight(x){
    if (x) {
        return eval(8+x);
    } else {
        return 8;
    }
}

export function nine(x){
    if (x) {
        return eval(9+x);
    } else {
        return 9;
    }
}
