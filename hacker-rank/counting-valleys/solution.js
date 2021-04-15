const steps = 8;
const path = "UDDDUDUU";

const solve = (steps, path) => {
  const pathArr = path.split("");
  //   if (steps !== pathArr.length)
  //     throw new Error(`Steps ${steps} !== number of paths ${pathArr}`);

  let currentLevel = 0;
  let valleysPassed = 0;
  let isValley = true;

  pathArr.forEach((path) => {
    console.log("\ncurrentLevel:", currentLevel);
    if (path === "U") {
      currentLevel += 1;
    }
    if (path === "D") {
      currentLevel -= 1;
    }

    if (isValley && currentLevel < 0) {
      isValley = false;
      valleysPassed += 1;
    }

    if (!isValley && currentLevel >= 0) {
      isValley = true;
    }
  });

  return console.log(valleysPassed);
};

solve(steps, path);
