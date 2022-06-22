module.exports = function reverse (n) {
    let x = n;
    if (x < 0) {
        x = x * (-1);
    }
    
    while (x % 10 == 0) {
        x = x / 10;
    }
    x = String(x);

    x = x.split("").reverse().join("");
    return Number(x);
}
