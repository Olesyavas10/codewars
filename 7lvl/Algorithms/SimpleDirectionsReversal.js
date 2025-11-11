function solve(arr) {
    const backRoad = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const [dir, , ...rest] = arr[i].split(' ');
    const road = rest.join(' ');

    if (i === arr.length - 1) {
      // Последняя дорога становится первой
      backRoad.push(`Begin on ${road}`);
    } else {
      // Меняем направление для обратного пути
      const prevDir = arr[i + 1].split(' ')[0];
      const opposite = prevDir === 'Right' ? 'Left' : 'Right';
      backRoad.push(`${opposite} on ${road}`);
    }
  }

  return backRoad;
}
console.log(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']))