    // calculadora

     // validando se os campos estão vazios

      const btnSomar = document.querySelector("#btnSomar");
      const btnSubtrair = document.querySelector("#btnSubtrair");
      const btnDividir = document.querySelector("#btnDividir");
      const btnMultiplicar = document.querySelector("#btnMultiplicar");
      const txtNum1 = document.querySelector("#txtNum1");
      const txtNum2 = document.querySelector("#txtNum2");
      const result = document.querySelector("#result");

      // Usando uma função para converter os valores dos inputs em números
      function getNumbers() {
        return [Number(txtNum1.value), Number(txtNum2.value)];
      }

      // Usando um objeto para armazenar as operações
      const operations = {
        somar: (a, b) => a + b,
        subtrair: (a, b) => a - b,
        dividir: (a, b) => a / b,
        multiplicar: (a, b) => a * b,
      };

      // Usando funções para executar as operações
      btnSomar.addEventListener("click", () => {
        result.innerHTML = operations.somar(getNumbers() [0], getNumbers() [1]);
      });
      btnSubtrair.addEventListener("click", () => {
        result.innerHTML = operations.subtrair(getNumbers() [0], getNumbers() [1]);
        console.log(getNumbers() [0]);
      });
      btnDividir.addEventListener("click", () => {
        result.innerHTML = Number(txtNum1.value) / Number(txtNum2.value);
      });
      btnMultiplicar.addEventListener("click", () => {
        result.innerHTML = Number(txtNum1.value) * Number(txtNum2.value);
      });