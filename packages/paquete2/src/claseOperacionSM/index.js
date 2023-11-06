"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operaciones = void 0;
class Operaciones {
    sumar(num1, num2) {
        const resultado = num1 + num2;
        console.log("La suma es: ", resultado);
        console.log("La suma es: ", resultado);
        return resultado;
    }
    restar(num1, num2) {
        const resultado = num1 - num2;
        console.log("La resta es: ", resultado);
        console.log("La resta es: ", resultado);
        return resultado;
    }
    multiplicar(num1, num2) {
        const resultado = num1 * num2;
        console.log("La multiplicación es: ", resultado);
        console.log("La multiplicación es: ", resultado);
        return resultado;
    }
    dividir(num1, num2) {
        let resultado = "No es posible dividir por 0";
        if (num2 === 0)
            return resultado;
        resultado = num1 / num2;
        console.log("La división es: ", resultado);
        console.log("La división es: ", resultado);
        return resultado;
    }
    exponente(num1, num2) {
        const resultado = Math.pow(num1, num2);
        console.log("El exponente es: ", resultado);
        console.log("El exponente es: ", resultado);
        return resultado;
    }
}
exports.Operaciones = Operaciones;
