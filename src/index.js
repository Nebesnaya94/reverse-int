module.exports = function reverse (n) {
    n = Math.abs(n);
    let newNum = n.toString(10).split('').reverse().join('');
    return Number(newNum);
}
