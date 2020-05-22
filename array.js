// Array.prototype.map
// Array.prototype.filter
Array.prototype.forEach = function(callback, thisArg = this){
    for(let i = 0; i < this.length; i++) callback.call(thisArg, this[i], i, this);
}
Array.prototype.reduce = function(accumulator, result){
    let i = 0;
    if(result == undefined) { result = this[0]; i = 1 };
    for(; i < this.length; i++) result = accumulator(result, this[i], i, this);
    return result;
}