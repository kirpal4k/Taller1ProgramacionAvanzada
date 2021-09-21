console.log(obtenerNombre("ARQ:Juan"));
function obtenerNombre(codigoNave) {

    let nombrePiloto=codigoNave.split(":");
    return(" el nombre del piloto es " + nombrePiloto[1]);
    
}
let nombre=obtenerNombre("ARQ:Juan");
console.log(nombre);