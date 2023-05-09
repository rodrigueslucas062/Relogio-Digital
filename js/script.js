const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let Horas = dateToday.getHours();
    let Minutos = dateToday.getMinutes();
    let Segundos = dateToday.getSeconds();

    if(Horas < 10) Horas = '0' + Horas;
    if(Minutos < 10) Minutos = '0' + Minutos;
    if(Segundos < 10) Segundos = '0' + Segundos;

    horas.textContent = Horas;
    minutos.textContent = Minutos;
    segundos.textContent = Segundos;
})