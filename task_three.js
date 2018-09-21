var terningSum = 0;

while (terningSum < 50) {
  terningSum += Math.round(Math.random() * 6 + 1);
  console.log(terningSum);
}

var i = 10;
while (i < 30) { // If i <= 30 then it would be equal or less than.
  console.log(i);
  i++ // i += 2 - would increment with 2 rather than 1.
}
