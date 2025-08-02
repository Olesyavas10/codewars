function sortByBinaryOnes(list) {
  return list.sort((a, b) => {
    // Считаем количество единиц в двоичном виде
    let onesA = a.toString(2).split("1").length - 1;
    let onesB = b.toString(2).split("1").length - 1;
    
    // Сортировка: сначала по количеству 1, если одинаково — по значению числа
    if (onesA === onesB) {
      return a - b;
    }
    return onesB - onesA; // больше единиц — выше
  });
}