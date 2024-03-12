const solve24 = (numStr) => {
  // Generate all possible combinations of ordering the numbers
  let numberCombinations = [];

  for (let i1 = 0; i1 < 4; i1++) {
    for (let i2 = 0; i2 < 4; i2++) {
      for (let i3 = 0; i3 < 4; i3++) {
        // not very elegant but short and simple ...
        if (i1 !== i2 && i2 !== i3 && i1 !== i3) {
          let i4 = 6 - i1 - i2 - i3;
          numberCombinations.push([
            numStr[i1],
            numStr[i2],
            numStr[i3],
            numStr[i4],
          ]);
        }
      }
    }
  }

  // Format: "_n_n_n_n_"

  // Choices for symbols to fill in the gaps
  const startChoices = ["", "(", "(("];
  const midChoices = ["+", "-", "*", "/", "(", ")", "((", "))", ")*(", ")/("];
  const endChoices = ["", ")", "))"];

  // Iterate through all number combinations
  for (let i = 0; i < 24; i++) {
    let combination = numberCombinations[i];

    // Again ... not pretty but simple and stupid
    for (let i1 = 0; i1 < 3; i1++) {
      for (let i5 = 0; i5 < 3; i5++) {
        for (let i2 = 0; i2 < 10; i2++) {
          for (let i3 = 0; i3 < 10; i3++) {
            for (let i4 = 0; i4 < 10; i4++) {
              let mathString =
                startChoices[i1] +
                combination[0] +
                midChoices[i2] +
                combination[1] +
                midChoices[i3] +
                combination[2] +
                midChoices[i4] +
                combination[3] +
                endChoices[i5];

              try {
                if (eval(mathString) == 24) {
                  return mathString;
                }
              } catch (e) {}
            }
          }
        }
      }
    }
  }

  return "no solution exists";
};
