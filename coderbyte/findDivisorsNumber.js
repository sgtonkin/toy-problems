function getDivisorsCnt(n){
var divisors = [n];
for (var i = 0; i <= (n / 2); i++) {
  if (n % i === 0) {
    divisors.push(i);
  }
}
return divisors.length;
}

console.log(getDivisorsCnt(5));
