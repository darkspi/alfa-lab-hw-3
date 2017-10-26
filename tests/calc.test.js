// ФУНКЦИЯ
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

import { times, plus, minus, dividedBy, zero, one, two, three, four, five,
        six, seven, eight, nine } from '../src/calc'

describe('calcuator, lol', function() {
    it('must return 35', function() {
        expect(seven(times(five()))).toBe(35);
    });

    it('must return 13', function() {
        expect(four(plus(nine()))).toBe(13);
    });

    it('must return 5', function() {
        expect(eight(minus(three()))).toBe(5);
    });

    it('must return 3', function() {
        expect(six(dividedBy(two()))).toBe(3);
    });
});
