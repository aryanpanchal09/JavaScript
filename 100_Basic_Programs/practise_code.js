function missingnumber(arr) {
  const actualnumber = [];

  for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) actualnumber.push(i);
  }
  return actualnumber;
}

console.log(missingnumber([1, 2, 3, 6, 9]));
