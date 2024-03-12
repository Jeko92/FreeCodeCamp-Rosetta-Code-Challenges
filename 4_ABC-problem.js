const canMakeWord = (word) => {
  const wordArr = word.toUpperCase().split("");
  const letterPairs = [
    ["B", "O"],
    ["X", "K"],
    ["D", "Q"],
    ["C", "P"],
    ["N", "A"],
    ["G", "T"],
    ["R", "E"],
    ["T", "G"],
    ["Q", "D"],
    ["F", "S"],
    ["J", "W"],
    ["H", "U"],
    ["V", "I"],
    ["A", "N"],
    ["O", "B"],
    ["E", "R"],
    ["F", "S"],
    ["L", "Y"],
    ["P", "C"],
    ["Z", "M"],
  ];

  for (let letter in wordArr) {
    // Check if any pair contains letter
    const pairIndex = letterPairs.findIndex(
      (pair) => pair.indexOf(wordArr[letter]) >= 0
    );
    if (pairIndex == -1) {
      // Return false if no pair contains letter
      return false;
    } else {
      // Otherwise, remove the pair
      letterPairs.splice(pairIndex, 1);
    }
  }
  return true;
};

console.log(canMakeWord("bark"));
console.log(canMakeWord("BooK"));
console.log(canMakeWord("TReAT"));
console.log(canMakeWord("COMMON"));
console.log(canMakeWord("squAD"));
console.log(canMakeWord("conFUSE"));
