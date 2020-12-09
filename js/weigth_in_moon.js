let weigth_koder = prompt('¿ Cual es tu peso?' )

let weigth_moon = parseFloat(weigth_koder / 9.81) * 1.622

let result = ('tu peso en la luna es:' +  weigth_moon  + '  Kg.')
let resultTwo = `Tu peso en la luna es: ${weigth_moon} Kg`
alert(resultTwo)
