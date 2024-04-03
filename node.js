const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function askQuestion(query) {
    return new Promise(resolve => readline.question(query, resolve));
  }
  
  async function main() {
    let option;
    do {
      console.log("\nElija una opción:");
      console.log("1. Operadores");
      console.log("2. Condicionales");
      console.log("3. Ciclos");
      console.log("99. Salir");
      option = Number(await askQuestion("Opción: "));
  
      switch (option) {
        case 1:
          // Ejecutar función de operadores
          await operadores();
          break;
        case 2:
          // Ejecutar función de condicionales
          await condicionales();
          break;
        case 3:
          // Ejecutar función de ciclos
          await ciclos();
          break;
      }
    } while (option !== 99);
    readline.close();
    console.log("Programa terminado.");
  }
  
  // Funciones para la categoría Operadores
  async function operadores() {
    let opcionOperadores;
    do {
      console.log("\nOperadores");
      console.log("1. Calcular el área de un triángulo.");
      console.log("2. Ingresar dos números y sumarlos.");
      console.log("3. Ingresar un número y visualizar el número elevado al cuadrado.");
      console.log("4. Escribir un algoritmo que convierta de euros a dólares.");
      console.log("5. Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor de área y del perimetro.");
      console.log("6. Escribir un algoritmo que determine el área y el volúmen de un cilindro.");
      console.log("7. Realizar un algoritmo que lea el radio de una circuferencia y escriba la longitud de la misma y el área (pi*r)^2 del circulo inscrito.");
      console.log("8. Calcular el promedio de tres (3) números ingresados por teclado.");
      console.log("99. Volver al menú principal.");
      opcionOperadores = Number(await askQuestion("Seleccione una opción de operadores: "));
  
      switch (opcionOperadores) {
        case 1:
          await calcularAreaTriangulo();
          break;
        case 2:
          await sumarNumeros();
          break;
        case 3:
          await numeroCuadrado();
          break;
        case 4:
          await convertirEurosADolares();
          break;
        case 5:
          await calcularAreaPerimetroCuadrado();
          break;
        case 6:
          await calcularAreaVolumenCilindro();
          break;
        case 7:
          await calcularLongitudAreaCirculo();
          break;
        case 8:
          await calcularPromedioTresNumeros();
          break;
      }
    } while (opcionOperadores !== 99);
  }
  
  async function calcularAreaTriangulo() {
    let base = Number(await askQuestion("Ingrese la base del triángulo (m): "));
    let altura = Number(await askQuestion("Ingrese la altura del triángulo (m): "));
    let area = (base * altura) / 2;
    console.log(`El área del triángulo es: ${area} metros cuadrados`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }
  
  async function sumarNumeros() {
    let num1 = Number(await askQuestion("Ingrese el primer número: "));
    let num2 = Number(await askQuestion("Ingrese el segundo número: "));
    let suma = num1 + num2;
    console.log(`La suma de los dos números es: ${suma}`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }

  async function numeroCuadrado() {
    let num = Number(await askQuestion("Ingrese un número: "));
    let cuadrado = num*num;
    console.log(`El número cuadrado es: ${cuadrado}`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }
  
  async function convertirEurosADolares() {
    let euros = Number(await askQuestion("Ingrese la cantidad en euros: "));
    let tipoCambio = Number(await askQuestion("Ingrese el tipo de cambio actual de euros a dólares: "));
    let dolares = euros * tipoCambio;
    console.log(`${euros} euros al cambio actual son ${dolares} dólares.`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }
  
  async function calcularAreaPerimetroCuadrado() {
    let lado = Number(await askQuestion("Ingrese la longitud del lado del cuadrado: "));
    let area = lado * lado;
    let perimetro = 4 * lado;
    console.log(`El área del cuadrado es: ${area}. El perímetro del cuadrado es: ${perimetro}.`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }
  
  async function calcularAreaVolumenCilindro() {
    let radio = Number(await askQuestion("Ingrese el radio del cilindro: "));
    let altura = Number(await askQuestion("Ingrese la altura del cilindro: "));
    let areaBase = Math.PI * radio * radio;
    let volumen = areaBase * altura;
    console.log(`El área de la base del cilindro es: ${areaBase}. El volumen del cilindro es: ${volumen}.`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }
  
  async function calcularLongitudAreaCirculo() {
    let radio = Number(await askQuestion("Ingrese el radio de la circunferencia: "));
    let longitud = 2 * Math.PI * radio;
    let area = Math.PI * radio * radio;
    console.log(`La longitud de la circunferencia es: ${longitud}. El área del círculo es: ${area}.`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }
  
  async function calcularPromedioTresNumeros() {
    let numero1 = Number(await askQuestion("Ingrese el primer número: "));
    let numero2 = Number(await askQuestion("Ingrese el segundo número: "));
    let numero3 = Number(await askQuestion("Ingrese el tercer número: "));
    let promedio = (numero1 + numero2 + numero3) / 3;
    console.log(`El promedio de los tres números es: ${promedio}.`);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
  }


  async function condicionales() {
    let opcionCondicionales;
    do {
      console.log("\nCondicionales");
      console.log("1. Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.");
      console.log("2. Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor.");
      console.log("3. Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos.");
      console.log("4. Dados dos números A y B, sumarlos si A es menor que B o sino restarlos.");
      console.log("5. Dados dos números A y B encontrar el cociente entre A y B. Recordar que la división por cero no está definida, en ese caso debe aparecer una leyenda anunciando que la división no es posible.");
      console.log("6. Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario multiplicarlos");
      console.log("7. Escribir un algoritmo que determine si un año es bisiesto o no.");
      console.log("99. Volver al menú principal.");
      opcionCondicionales = Number(await askQuestion("Seleccione una opción de condicionales: "));
  
      switch (opcionCondicionales) {
        case 1:
          await determinarPositivoNegativo();
          break;
        case 2:
          await compararNumeros();
          break;
        case 3:
          await imprimirMenorYMayorDeTres();
          break;
        case 4:
          await sumarORestar();
          break;
        case 5:
          await encontrarCociente();
          break;
        case 6:
          await sumarOMultiplicar();
          break;
        case 7:
          await determinarBisiesto();
          break;
        
      }
    } while (opcionCondicionales !== 99);
  }

  async function determinarPositivoNegativo() {
    let num = Number(await askQuestion("Ingrese un número: "));
    if (num > 0) {
      console.log("El número es positivo.");
      console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
    } else if (num < 0) {
      console.log("El número es negativo.");
      console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
    } else {
      console.log("El número es cero.");
      console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
    }
  }
  
  async function compararNumeros() {
    let num1 = Number(await askQuestion("Ingrese el primer número: "));
    let num2 = Number(await askQuestion("Ingrese el segundo número: "));
    if (num1 > num2) {
      console.log(`El mayor es ${num1} y el menor es ${num2}`);
      console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
    } else if (num1 < num2) {
      console.log(`El mayor es ${num2} y el menor es ${num1}`);
      console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
    } else {
      console.log("Ambos números son iguales.");
      console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
    }
  }

      async function imprimirMenorYMayorDeTres() {
        let num1 = Number(await askQuestion("Ingrese el primer número entero positivo: "));
        let num2 = Number(await askQuestion("Ingrese el segundo número entero positivo: "));
        let num3 = Number(await askQuestion("Ingrese el tercer número entero positivo: "));
      
        let menor = Math.min(num1, num2, num3);
        let mayor = Math.max(num1, num2, num3);
      
        console.log(`El menor de los números es: ${menor}`);
        console.log(`El mayor de los números es: ${mayor}`);
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
      }
      
      async function sumarORestar() {
        let A = Number(await askQuestion("Ingrese el número A: "));
        let B = Number(await askQuestion("Ingrese el número B: "));
      
        if (A < B) {
          console.log(`A es menor que B. La suma es: ${A + B}`);
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        } else {
          console.log(`A no es menor que B. La resta es: ${A - B}`);
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        }
      }
 
      async function encontrarCociente() {
        let A = Number(await askQuestion("Ingrese el número A (dividendo): "));
        let B = Number(await askQuestion("Ingrese el número B (divisor): "));
      
        if (B === 0) {
          console.log("No se puede dividir por cero.");
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        } else {
          console.log(`El cociente de A dividido por B es: ${A / B}`);
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        }
      }
      
      async function sumarOMultiplicar() {
        let A = Number(await askQuestion("Ingrese el número A: "));
        let B = Number(await askQuestion("Ingrese el número B: "));
      
        if (A < 0 || B < 0) {
          console.log(`Al menos uno de los números es negativo. La suma es: ${A + B}`);
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        } else {
          console.log(`Ninguno de los números es negativo. El producto es: ${A * B}`);
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        }
      }
      
      async function determinarBisiesto() {
        let year = Number(await askQuestion("Ingrese un año para verificar si es bisiesto: "));
      
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          console.log(`El año ${year} es bisiesto.`);
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        } else {
          console.log(`El año ${year} no es bisiesto.`);
          console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
        }
      }
      

  async function ciclos() {
    let opcionCiclos;
    do{
        console.log("\nCiclo")
        console.log("1. Imprimir todos los múltiplos de 3 que hay entre 1 y 100.");
        console.log("2. Imprimir los números impares entre 0 y 100.");
        console.log("3. Imprimir los números pares del 1 al 100");
        console.log("4. Escribir un programa que imprima por pantalla los cuadrados de los números del 1 al 30.");
        console.log("5. Escribir un programa que sume los cuadrados de los cien primeros números naturales, mostrando el resultado en pantalla");
        console.log("6. Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los números comprendidos entre ellos en secuencia ascendente.");
        console.log("7. Sumar todos los números que se digitan por teclado mientras no sea cero.");
        console.log("99. Volver al menú principal.");
        opcionCiclos = Number(await askQuestion("Seleccione una opción de ciclos: "));

        switch (opcionCiclos) {
            case 1:                          
              await imprimirMultiplosDeTres();                                     
              break;                                   
            case 2:                                       
              await imprimirImpares();                                      
              break;                                 
            case 3:                                     
              await imprimirPares();                                  
              break;
            case 4:
              await imprimirCuadrados();
              break;
            case 5:
              await sumarCuadrados();
              break;
            case 6:
              await mostrarNumerosSecuencia();
              break;
            case 7:
              await sumarNumerosHastaCero();
              break;
                }

            } while (opcionCiclos !== 99);

            
    }
     async function imprimirMultiplosDeTres() {
        console.log("Múltiplos de 3 entre 1 y 100:");
        for (let i = 3; i <= 100; i += 3) {
          process.stdout.write(`${i} `);
        }
        console.log();  
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------");
      }
      
      async function imprimirImpares() {
        console.log("Números impares entre 0 y 100:");
        for (let i = 1; i < 100; i += 2) {
          process.stdout.write(`${i} `);
        }
        console.log(""); 
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------");
      }
      
      async function imprimirPares() {
        console.log("Números pares del 1 al 100:");
        for (let i = 2; i <= 100; i += 2) {
          process.stdout.write(`${i} `);
        }
        console.log(""); 
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------");
      }
      
      async function imprimirCuadrados() {
        console.log("Cuadrados de los números del 1 al 30:");
        for (let i = 1; i <= 30; i++) {
          process.stdout.write(`${i * i} `);
        }
        console.log(""); 
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------");
      }

      async function sumarCuadrados() {
        let suma = 0;
        for (let i = 1; i <= 100; i++) {
          suma += i * i;
        }
        console.log(`La suma de los cuadrados de los primeros 100 números naturales es: ${suma}`);
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
      }
      
      async function mostrarNumerosSecuencia() {
        let numero1 = Number(await askQuestion("Ingrese el número menor: "));
        let numero2 = Number(await askQuestion("Ingrese el número mayor: "));
        
        if (numero1 < numero2) {
          console.log(`Números entre ${numero1} y ${numero2}:`);
          for (let i = numero1; i <= numero2; i++) {
            process.stdout.write(`${i} `);
          }
        } else {
          console.log("El primer número debe ser menor que el segundo.");
        }
        console.log(); 
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------");
      }
      
      async function sumarNumerosHastaCero() {
        let suma = 0;
        let numero;
        
        do {
          numero = Number(await askQuestion("Ingrese un número (0 para terminar): "));
          suma += numero;
        } while (numero !== 0);
      
        console.log(`La suma de todos los números ingresados es: ${suma}`);
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------"); 
      }
  
  main();