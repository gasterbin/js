let lvl = parseInt(prompt("Введіть число від 1 до 7:"));

switch (lvl) {
  case 1:
    alert('Ваш режим доступу - --x');
    break;
  case 2:
    alert('Ваш режим доступу - -w-');
    break;
  case 3:
    alert('Ваш режим доступу - -wx');
    break;
  case 4:
    alert('Ваш режим доступу - r--');
    break;
  case 5:
    alert('Ваш режим доступу - r-x');
    break;
  case 6:
    alert('Ваш режим доступу - rw-');
    break;
  case 7:
    alert('Ваш режим доступу - rwx');
    break;
  default:
    alert("Помилка. Спробуйте заново.");
}
