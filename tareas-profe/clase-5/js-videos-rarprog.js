document.querySelector('#calcular-tiempo').onclick = function(){
    const horas = document.querySelectorAll('#hr-video');
    const minutos = document.querySelectorAll('#min-video');
    const segundos = document.querySelectorAll('#seg-video');
    
    let hrsTotales = 0;
    let minTotales = 0;
    let segTotales = 0;

    for (let i = 0; i < segundos.length; i++) {
        segTotales += Number(segundos[i].value);
        
    }
    
    for (let i = 0; i < minutos.length; i++) {
        minTotales += Number(minutos[i].value);

    }
    
    for (let i = 0; i < horas.length; i++) {
        hrsTotales += Number(horas[i].value);
    }

    function calcularTiempo (){
        const totalEnSegundos = (hrsTotales * 3600) + (minTotales * 60) + (segTotales)
        const hrs = ~~(totalEnSegundos / 3600); // ~~ es abreviacion de Math.floor
        const mins = ~~((totalEnSegundos % 3600) / 60);
        const segs = ~~(totalEnSegundos % 60);
    
        return hrs + ":" + mins + ":" + segs
    }
    
    document.querySelector('#tiempo-total').innerText = calcularTiempo(); 
    
    return false;
}


//     function fancyTimeFormat(time)
// {   
//     // Hours, minutes and seconds
//     var hrs = ~~(time / 3600);
//     var mins = ~~((time % 3600) / 60);
//     var secs = ~~time % 60;

//     // Output like "1:01" or "4:03:59" or "123:03:59"
//     var ret = "";

//     if (hrs > 0) {
//         ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
//     }

//     ret += "" + mins + ":" + (secs < 10 ? "0" : "");
//     ret += "" + secs;
//     return ret;
// }
