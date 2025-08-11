//задача на черепаха заяц

function hasLoop(indices) {
  let slow = 0;
  let fast = 0;

  while (true) {
    // Двигаем slow на 1 шаг
    slow = indices[slow];
    // Двигаем fast на 2 шага
    fast = indices[indices[fast]];

    // Если fast или indices[fast] вышли за границы
    if (fast === undefined || indices[fast] === undefined) {
      return false; // цикла нет
    }

    // Если slow и fast встретились → цикл есть
    if (slow === fast) {
      return true;
    }
  }
}