/* Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

 */
let Ghost = function() {
  const colors = ["white", "yellow", "purple", "red"];
    const randomIndex = Math.floor(Math.random() * colors.length);// округление(рандомно от 0 до 1 * длину массива с цветами)
    this.color = colors[randomIndex];
};