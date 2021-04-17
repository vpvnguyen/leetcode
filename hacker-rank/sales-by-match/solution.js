const n = 8;
const ar = [1, 2, 1, 2, 1, 3, 2, 1];

const solve = (n, ar) => {
  // reject if ar length > n
  if (ar.length !== n) return console.log(`${ar.length} !== ${n}`);

  // create a map with matching items
  const matched = { pairs: 0 };

  // iterate through array and count matching elements to map
  for (let i = 0; i < ar.length; i++) {
    console.log("i", ar[i]);

    if (matched[ar[i]]) {
      console.log(`${ar[i]} exists in ${matched}`);
      matched[ar[i]] += 1;
      matched[`${ar[i]}-counter`] += 1;
    }

    if (!matched[ar[i]]) {
      console.log(matched[ar[i]]);
      console.log(`${ar[i]} doesnt exist in ${matched}`);
      matched[ar[i]] = 1;
      matched[`${ar[i]}-counter`] = 1;
    }

    if (matched[`${ar[i]}-counter`] === 2) {
      matched[`${ar[i]}-counter`] = 0;
      matched.pairs += 1;
    }

    console.log(matched);
    console.log("");
  }

  return console.log(matched.pairs);
};

const solve2 = (n, ar) => {
  const map = {};

  ar.forEach((item) => {
    map[item] = map[item] ? map[item] + 1 : 1;
  });

  console.log("map", map);

  const mapValues = Object.values(map);
  const startAt = 0;
  const pairs = mapValues.reduce((acc, curr) => {
    return acc + Math.floor(curr / 2);
  }, startAt);

  return console.log(pairs);
};

const solve3 = (n, ar) => {
  const map = {};

  // reject if ar length > n
  if (ar.length !== n) return console.log(`${ar.length} !== ${n}`);

  // iterate through array and count matching elements to map
  ar.forEach((item) => {
    if (map[item]) map[item].count += 1;

    if (!map[item])
      map[item] = {
        count: 1,
      };
  });

  // Object.keys()
};

solve(n, ar);
solve2(n, ar);
