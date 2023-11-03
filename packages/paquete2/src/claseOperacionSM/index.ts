export class Operaciones {
  sumar(num1: number, num2: number): number {
    const resultado = num1 + num2;
    console.log("La suma es: ", resultado);
    console.log("La suma es: ", resultado);
    return resultado;
  }
  restar(num1: number, num2: number): number {
    const resultado = num1 - num2;
    console.log("La resta es: ", resultado);
    console.log("La resta es: ", resultado);
    return resultado;
  }
  multiplicar(num1: number, num2: number): number {
    const resultado = num1 * num2;
    console.log("La multiplicación es: ", resultado);
    console.log("La multiplicación es: ", resultado);
    return resultado;
  }

  dividir(num1: number, num2: number): number | string {
    let resultado: number | string = "No es posible dividir por 0"
    if(num2 === 0) return resultado
    resultado = num1 / num2;
    console.log("La división es: ", resultado);
    console.log("La división es: ", resultado);
    return resultado;
  }

  exponente(num1: number, num2: number):number {
    const resultado = Math.pow(num1, num2);
    console.log("El exponente es: ", resultado);
    console.log("El exponente es: ", resultado);
    return resultado
  }

}
