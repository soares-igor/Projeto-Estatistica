function calcular(){

    var dadosVarX = document.getElementById('dadosX').value
    var dadosVarY = document.getElementById('dadosY').value
    let resultado = document.getElementById('resultado')
    var dadosX = []
    var dadosSepX = []
    var dadosY = []
    var dadosSepY = []
    var dadosNumX = []
    var dadosNumY = []
    var somaX = 0
    var somaY = 0
    var multxy = []
    var somaMultxy = 0
    var x2 = []
    var somaX2 = 0
    var y2 = []
    var somaY2 = 0
    var r = 0

    dadosX.push(dadosVarX)
    dadosSepX = dadosX.toString().split(';')
    for(let i = 0; i < dadosSepX.length; i++){
        dadosNumX.push(Number(dadosSepX[i]))
    }

    somaX = dadosNumX.reduce((acum, n) => acum += n)

    dadosY.push(dadosVarY)
    dadosSepY = dadosY.toString().split(';')
    for(let i = 0; i < dadosSepY.length; i++){
        dadosNumY.push(Number(dadosSepY[i]))
    }

    if(dadosNumX.length !== dadosNumY.length){
        swal("Ops!", "Digite dados válidos!", "error");
        variavel.focus()
        return
    }

    somaY = dadosNumY.reduce((acum, n) => acum += n)

    for(i = 0; i < dadosNumX.length; i++){
        multxy.push(dadosNumX[i] * dadosNumY[i])
    }

    somaMultxy = multxy.reduce((acum, n) => acum += n)

    x2 = dadosNumX.map(x => x ** 2)
    somaX2 = x2.reduce((acum, n) => acum += n)

    y2 = dadosNumY.map(y => y ** 2)
    somaY2 = y2.reduce((acum, n) => acum += n)

    var parte1 = ((dadosNumX.length * somaMultxy) - ((somaX) * (somaY)))
    var parte2 =  Math.sqrt(((dadosNumX.length * somaX2)-(somaX ** 2))*((dadosNumX.length * somaY2)-(somaY ** 2)))
    r =  parte1 / parte2 
    r = r * 100
    r = r.toFixed(2)

    let resultadoR = document.createElement('h4')
    resultadoR.innerText = `Correlação: ${r} %`
    document.getElementById('resultado').innerHTML = ''
    resultado.appendChild(resultadoR)

    console.log(somaX)
    console.log(somaY)
    console.log(multxy)
    console.log(somaMultxy)
    console.log(x2)
    console.log(somaX2)
    console.log(y2)
    console.log(somaY2)
    console.log(parte1)
    console.log(parte2)
    console.log(r)
    console.log(dadosNumX)


    // Limpa Gráfico
    var grafico = document.getElementById('grafico');
    grafico.innerHTML = '&nbsp;';
    $('#grafico').append('<canvas id="myChart"><canvas>');
    ctx = $("#myChart").get(0).getContext("2d");



    let chart = new Chart(document.getElementById("myChart"), {
        type: 'line',
        data:{
            labels: dadosNumX,
            datasets: [
            {
                label: "X ",
                data: dadosNumX,
                borderColor: '#5EFF4C',
                backgroundColor: 'transparent',
                borderWidth: 4
            
                },
            {
                label: "Y ",
                data: dadosNumY,
                borderColor: '#5EFF4C',
                backgroundColor: 'transparent',
                borderWidth: 4
        
            }

            ]
            
        },

        options:{  

            title:{
                display: false,
            },

            scales:{
                yAxes: [
                    {
                        ticks:{
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    })
}