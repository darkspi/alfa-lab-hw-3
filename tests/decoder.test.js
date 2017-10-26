// ЗАДАНИЕ ДЕКОДЕР

// var abc1 = "abcdefghijklmnopqrstuvwxyz";
// var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"

// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"

// var abc1 = "abcdefghijklmnopqrstuvwxyz";
// var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

import  encryption from '../src/decoder';

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new encryption(abc1, abc2);

describe('encode', function() {
    it('should encode to "eta"', function() {
        expect(sub.encode('abc')).toBe('eta');
    });

    it('should encode to "qxz"', function() {
        expect(sub.encode('xyz')).toBe('qxz');
    });

    it('should encode to "eirfg"', function() {
        expect(sub.encode('aeiou')).toBe('eirfg');
    });

});

describe('decode', function() {
    it('should decode to "abc"', function() {
        expect(sub.decode('eta')).toBe('abc');
    });

    it('should decode to "xyz"', function() {
        expect(sub.decode('qxz')).toBe('xyz');
    });

    it('should decode to "aeiou"', function() {
        expect(sub.decode('eirfg')).toBe('aeiou');
    });

});
