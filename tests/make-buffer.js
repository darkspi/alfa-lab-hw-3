// /// СТРОКОВЫЙ БУФФЕР
// function makeBuffer() {
//
// }
//
// var buffer = makeBuffer();
//
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
//
// console.log(buffer());
//
//
//
// buffer.clear();
//
// console.log(buffer());

import { makeBuffer } from '../src/make-buffer';

describe('make buffer', function() {
    it('should return "Замыкания Использовать Нужно!"', function() {
        var buffer = makeBuffer();

        buffer('Замыкания');
        buffer(' Использовать');
        buffer(' Нужно!');

        expect(buffer()).toBe('Замыкания Использовать Нужно!');
  });

  it('clear buffer', function() {
        let buffer = makeBuffer();

        buffer('Замыкания');
        buffer(' Использовать');
        buffer(' Нужно!');

        buffer.clear();

        expect(buffer()).toBe('');
    });
});
