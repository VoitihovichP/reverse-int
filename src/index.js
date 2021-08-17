module.exports = function reverse (num) {
    let arrayNum = [...num.toString()].map(Number);
    //console.log(arrayNum.length);
    if (arrayNum.length === 4) {
        arrayNum = arrayNum.slice(1);
    }
    return arrayNum.reverse().join('');
}
