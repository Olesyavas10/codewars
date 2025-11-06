function getTheVowels(word) {
 const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let expectedIndex = 0; // ждём 'a' сначала
  for (let char of word) {
    if (char === vowels[expectedIndex]) {
      count++;
      expectedIndex = (expectedIndex + 1) % vowels.length; // двигаемся по кругу
    }
  }

  return count;
}