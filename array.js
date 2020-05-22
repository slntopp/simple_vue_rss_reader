Array.prototype.map     = function(callback, thisArg = this){
    return this.reduce((result, el, i, arr) => {
        result.push(callback.call(thisArg, el, i, arr));
        return result;
    }, [])
}
Array.prototype.filter  = function(callback, thisArg = this){
    return this.reduce((result, el, i, arr) => {
        if(callback.call(thisArg, el, i, arr)) result.push(el);
        return result;
    }, [])
}
Array.prototype.forEach = function(callback, thisArg = this){
    for(let i = 0; i < this.length; i++) callback.call(thisArg, this[i], i, this);
}
Array.prototype.reduce  = function(accumulator, result){
    let i = 0;
    if(result == undefined) { result = this[0]; i = 1 };
    for(; i < this.length; i++) result = accumulator(result, this[i], i, this);
    return result;
}