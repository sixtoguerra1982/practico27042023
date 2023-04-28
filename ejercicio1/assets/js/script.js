// Crear una función para solicitar el número y validar antes de mostrar el resultado que 
// el  número  ingresado  se  encuentre  entre  1  y  20. 

const validateNumber = (num) => { 
    if (num > 20 || num < 1) {
        // return "Número fuera del rango"    
        return false
    } else {
        // return "Número en el rango"    
        return true
    }
}

const multi = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i + " x " + num + " = " + i * num) 
    }
}


const factorial = (num) => {
    for (let i = 1; i <= num; i++) {
        let factorial = 1
        for (let j = 1; j <= i; j++) {
            factorial = factorial * j
        }
        console.log("Factorial de " + i + " = " + factorial)
    }
}


const main = () => {
    let num = 0
    let numberValid = false
    do {
    num = parseInt(prompt("Ingrese un numero desde [1-20]:"));
    numberValid = validateNumber(num)
    if (numberValid === false){
        alert("Número fuera del rango")
    }
    } while(!numberValid)

    // "Número en el rango"    
    multi(num)
    factorial(num)
}


main()


