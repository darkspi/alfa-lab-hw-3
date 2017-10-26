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

export default function encryption(abc1, abc2) {
    this.abc1 = abc1;
    this.abc2 = abc2;

    this.encode = function(text) {
        var abc3 = "";
        for (i=0; i<text.length; i++){
            var a = this.abc1.indexOf(text[i]);
            abc3 = abc3 + this.abc2[a];
        }
        return abc3;
    },

    this.decode = function(text) {
        var abc4 = "";
        for (i=0; i<text.length; i++){
            var a = this.abc2.indexOf(text[i]);
            abc4 = abc4 + this.abc1[a];
        }
        return abc4;
    }

}
