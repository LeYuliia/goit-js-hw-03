const findBestEmployee = function(employees) {
  const max = Math.max(...Object.values(employees));
  const entries = Object.entries(employees);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    if (value === max) {
      return  key;
    }
  }
};

console.log(
  findBestEmployee({
    poly: 12,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployee({
    lux: 140,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);
