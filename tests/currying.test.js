// sum(2)(4)(5)(6)();
// 17

// sum(1)(2)();
// 3

import { currying } from '../src/currying';

describe('currying', function() {
    it('must return 17', function() {
        expect(currying(2)(4)(5)(6)()).toBe(17);
    });

    it('must return 3', function() {
        expect(currying(1)(2)()).toBe(3);
    });
});
