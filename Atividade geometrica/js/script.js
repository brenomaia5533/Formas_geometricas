function calculo_circulo() {
    var raio = parseInt(prompt("digite o valor do raio do circulo :"))
    var pi = raio * 3.14
    var resultadoci = pi ^ 2

    alert("a área do circulo é : "+ resultadoci);
}

function calculo_losango(){
    var dmaior = parseInt(prompt("digite o valor da diagonal MAIOR do losango : "))
    var dmenor = parseInt(prompt("digite o valor da diagonal MENOR do losango : "))
    var resultadolo = (dmaior * dmenor) / 2

    alert("a área do losango é : "+ resultadolo);
}

function calculo_pentagono() {
    var escolha = parseFloat(prompt("escolha o poligono que deseja calcular a área: \n5.PENTÁGONO \n6.HEXÁGONO \n7.HEPTÁGONO \n8.OCTÁGONO"))
    var apotema = parseInt(prompt("digite o valor da apótema do poligono : "))
    var lado = parseInt(prompt("digite o valor do lado do poligono "))
    var resultadope = (apotema * lado) * 5
    var resultadohe = (apotema * lado) * 6
    var resultadohp = (apotema * lado) * 7
    var resultadooc = (apotema * lado) * 8

    if(escolha === 5){
        alert("O valor da área do pentágono é: "+resultadope * 5)
    } else if(escolha === 6){
        alert("O resultado da área do hexágono é: "+resultadohe * 6)
    } else if(escolha === 7){
        alert("O resultado da área do heptágono é: "+resultadohp * 7)
    } else if(escolha === 8){
        alert("O resultado da área do octágono é: "+resultadooc * 8)
    } else alert("")
}  

function calculo_quadrado() {
    var area1 = parseInt(prompt("digite o valor do lado do quadrado :"))
    var resultadoqu = area1 * 4 
    
    alert("a área do quadrado é : "+ resultadoqu);
}

function calculo_retangulo() {
    var base = parseInt(prompt("digite o valor da largura do retangulo :"))
    var altura = parseInt(prompt("digite o valor do comprimento do retangulo :"))
    var resultadore = base * altura

    alert("o valor da área do retangulo é : "+ resultadore);
}

function calculo_triangulo() {
    var base = parseInt(prompt("digite o valor da base do triangulo :"))
    var altura = parseInt(prompt("digite o valor da altura do triangulo :"))
    var resultadotr = (base * altura) / 2 

    alert("a área do triangulo é : "+ resultadotr)
}

function tronco_piramide(){
    var areamenor = parseFloat(prompt("digite o valor da base menor da piramide"))
    var areamaior = parseFloat(prompt("digite o valor da base maior da piramide"))
    var arealateral = parseFloat(prompt("digite o valor da area lateral da piramide"))
    var total = areamenor + areamaior + arealateral

    if (areamenor > 0 && areamaior > 0 && arealateral > 0) {
        alert("o valor do tronco da piramide é: "+ total)
    } else { tronco_piramide();}
}

function coroa() {
    var raiomenor = parseFloat(prompt("digite o valor do raio menor da piramide"))
    var raiomaior = parseFloat(prompt("digite o valor do raio maior da piramide"))
    var conta = raiomenor^2 - raiomaior^2
    var resultado = conta * 3.14

    alert("o valor da coroa do circulo é "+ resultado +"m2")
}

function trapezio() {
    var basemenor = parseFloat(prompt("digite o valor da base menor do trapézio"))
    var basemaior = parseFloat(prompt("digite o valor da base maior do trapézio"))
    var altura = parseFloat(prompt("digite o valor da altura do trapézio"))
    var calculo = (basemaior + basemenor) * altura
    var resultado = calculo / 2 

    alert("a área do trapézio é: "+ resultado)
}

function setor(){
    var ac = parseFloat(prompt("digite o valor do angulo central do circulo"))
    var cr = parseFloat(prompt("digite o valor do comprimento do raio do circulo"))
    var calculo = (ac * cr^2) * 3.14
    var resultado = calculo / 360

    alert("o valor do setor circular é : "+ resultado)
}

