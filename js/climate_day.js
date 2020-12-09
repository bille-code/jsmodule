let climate_day = prompt ('¿ Como está el clima el día de hoy')

if ('lluvioso'== climate_day) {
    console.log('El día esta lluvioso y hay muchos charcos')
}

if('soleado' === climate_day) {
    console.log ('El día está muy caluroso')
}
if ('nevando' === climate_day){
    console.log ('El día esta para no salir de casa')
}
if ('nublado' === climate_day) {
    console.log ('El día esta para tomar cafe')
}
else {
    let other_climate = prompt('Describe el clima en tu localidad ')
    console.log (other_climate)


}