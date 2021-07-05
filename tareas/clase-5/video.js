document.querySelector("#calcular-tiempo-total").onclick = function () {
    const hrVideos = document.querySelectorAll("#hr");
    const minVideos = document.querySelectorAll("#min");
    const segVideos = document.querySelectorAll("#seg");

    let hrsSum = 0;
    let minSum = 0;
    let segSum = 0;

    for (let i = 0; i < hrVideos.length; i++) {
        hrsSum += Number(hrVideos[i].value);
    }

    for (let i = 0; i < minVideos.length; i++) {
        minSum += Number(minVideos[i].value);
    }

    for (let i = 0; i < segVideos.length; i++) {
        segSum += Number(segVideos[i].value);
    }

    console.log(`${hrsSum} $ minSum} ${segSum}`);

    function calcularTiempoTotal() {
        const totalSeg = hrsSum * 3600 + minSum * 60 + segSum;
        const hrsVideos = ~~(totalSeg / 3600); //~~ es abreviacion de Math.floor
        const minVideos = ~~((totalSeg % 3600) / 60);
        const segVideos = ~~(totalSeg % 60);
        return hrsVideos + ":" + minVideos + ":" + segVideos;
    }

    document.querySelector("#tiempo-total").innerText = calcularTiempoTotal();

    return false;
};
