const dataEvento = new Date("September 27, 2024, 21:00")
const timeStampDoEvento = dataEvento.getTime()

const contaAsHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaEvento = timeStampDoEvento - timeStampAtual

    const diaMs = 1000 * 60 * 60 * 24
    const horasMs = 1000 * 60 * 60
    const minutosMs = 1000 * 60

    const diasParaEvento = Math.floor(distanciaEvento / diaMs)
    const horasParaEvento = Math.floor((distanciaEvento % diaMs) / horasMs)
    const minutosParaEvento = Math.floor((distanciaEvento % horasMs) / minutosMs)
    const segundosParaEvento = Math.floor((distanciaEvento % minutosMs) / 1000)

    document.getElementById('contadorDias').innerHTML = `${diasParaEvento} `
    document.getElementById('contadorHoras').innerHTML = `${horasParaEvento} `
    document.getElementById('contadorMinutos').innerHTML = `${minutosParaEvento} `
    document.getElementById('contadorSegundos').innerHTML = `${segundosParaEvento} `


    if (diasParaEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contadorDias').style.display = 'none'
        document.getElementById('contadorHoras').style.display = 'none'
        document.getElementById('contadorMinutos').style.display = 'none'
        document.getElementById('contadorSegundos').style.display = 'none'

        document.getElementById('eventoExpirado').innerHTML = "Evento Expirado"
    }
}, 1000)