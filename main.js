let number1 = parseInt(prompt("Ingrese un nùmero"));
let number2 = parseInt(prompt("Ingrese otro nùmero"));
let operacion = prompt("Elija que operación desea realizar (suma, resta, multiplicacion, division)");

switch(operacion){
    case "suma":
        let resultadoA = number1 + number2;
        alert(`${number1} + ${number2} = ${resultadoA}`)
        break;
    
    case "resta":
        let resultadoB = number1 - number2;
        alert(`${number1} - ${number2} = ${resultadoB}`)
        break;
    
    case "multiplicacion":
        let resultadoC = number1 * number2;
        alert(`${number1} * ${number2} = ${resultadoC}`)
        break;
    
    case "division":
        let resultadoD = number1 / number2;
        alert(`${number1} / ${number2} = ${resultadoD}`)
        break;

}