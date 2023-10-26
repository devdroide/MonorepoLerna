export class Operaciones {
  sumar(num1: number, num2: number): number {
    const resultado = num1 + num2;
    console.log("La suma es:", resultado);
    return resultado;
  }
  restar(num1: number, num2: number): number {
    const resultado = num1 - num2;
    console.log("La resta es:", resultado);
    return resultado;
  }
  multiplicar(num1: number, num2: number): number {
    const resultado = num1 * num2;
    console.log("La multiplicación es:", resultado);
    return resultado;
  }
}
