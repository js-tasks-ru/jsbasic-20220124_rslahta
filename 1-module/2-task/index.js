/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}
 
/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if(userName != null || userName !="" || userName.indexOf('') >= 0 || (userName).length > 3 )
  return true;
} 

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
