module.exports = function reverse (n) {
    let res = '';
    n = n * (-1);
    while (n % 10 == 0) {
        n = n / 10;
    }
    n = n + '';
    n = n.split().reverse().join("");
    return n;
}
