let temperaturas=[10,30,40,5,8,85,12]

function calcularPromedioTemperatura(...temperaturas) {

    let temperaturaMaxima=Math.max(...temperaturas);
    let temperaturaMinima=Math.min(...temperaturas);

    let promedio=(temperaturaMaxima+temperaturaMinima)/2;

    return(promedio);
    
}

console.log("La temperatura promedio fue de : " + calcularPromedioTemperatura(...temperaturas));