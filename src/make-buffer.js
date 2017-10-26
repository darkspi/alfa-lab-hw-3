export function makeBuffer(){
    var bufStr = '';

    var strSum = function(inputStr){
        if (inputStr) {
            return bufStr = bufStr + inputStr;
        } else {
            return bufStr;
        }

    }

    strSum.clear = function(){
        return bufStr = '';
    }

    return strSum;
}
