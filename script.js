
var arreglo = [2,3,5,7,6];
function devolverPares(arreglo){
    var numeros = [];
        var i;
        for (i = 0; i < arreglo.length; i++) {
            if((arreglo[i] % 2) === 0){
                numeros.push(arreglo[i]);
            }
        }
        document.getElementById('numeros').innerHTML = numeros;
}

var colores = ['blue', 'red', 'Aqua', 'yellow', 'black']

function cambiarColorP(colores){
    this.colores = colores.reverse();
    var color = colores[parseInt((colores.length)/2)]
    document.getElementById('parrafo').style.color = color;
}


function reverse(s){
    return s.split('').reverse().join('');
}

function invertirTexto(div){
    var renglon = document.getElementById(div).innerHTML;
    var textoInvertido = reverse(renglon);
    document.getElementById(div).innerHTML = textoInvertido;
    console.log(document.getElementById(div ).innerHTML);
}
