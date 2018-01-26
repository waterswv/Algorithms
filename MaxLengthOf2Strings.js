// Find max(abs(length(x) − length(y)))

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxiik", "gggqaffhhh", "tttoowwwmmww"]
console.log(mxdiflg(s1, s2));


// Notes:
// Remember Abosolute values are never negative ...
// Math.Max returns the max value from an array
