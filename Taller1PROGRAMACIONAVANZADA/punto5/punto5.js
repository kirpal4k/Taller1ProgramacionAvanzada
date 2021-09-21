let salario=3500000;
let ventas=3;
let comisionVentas=1500000;
let impuestos=0.05;

let salarioSinImpuestos=((ventas*comisionVentas)+(salario))
let totalImpuestos=(((ventas*comisionVentas)+(salario))*(impuestos))
let totalSalario=(salarioSinImpuestos-totalImpuestos);

console.log("El salario Total del empleado es: "+totalSalario)