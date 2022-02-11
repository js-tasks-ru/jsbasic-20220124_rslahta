let calculator = {
<<<<<<< HEAD
=======
  read(a, b) {
    this.a = a;
    this.b = b;
  },

>>>>>>> 56aed09a962f6f1808c0658b8524fccef8c695da
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
<<<<<<< HEAD

  read() {
    this.a = +prompt('Введите число 1: ','');
    this.b = +prompt('Введите число 1: ','');
  }
=======
>>>>>>> 56aed09a962f6f1808c0658b8524fccef8c695da
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
