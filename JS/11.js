var Fecha = parseInt(prompt("Ingrese una fecha: DDMMAAAA"))

var Dia = parseInt(Fecha/1000000)

var Mes = parseInt((Fecha/10000) - (Dia*100))

var Año = parseInt(Fecha%10000)

console.log(Dia + "/" + Mes + "/" + Año)
