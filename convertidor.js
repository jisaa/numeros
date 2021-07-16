let separadores = ".,-";
let nombre_separadores = {
    ".": "punto",
    ",": "coma",
    "-": "guión"
};


function convertir_masivo() {
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("resultado");

    var resultado = "";
    var digitos = "0123456789";
    var palabra = "";
    // 0: fuera de número. 1: en número
    var q = 0;
    for (var i = 0; i < origen.length; ++i) {
        if (q == 0) {
            if (digitos.includes(origen[i])) {
                palabra = origen[i];
                q = 1;
            } else {
                resultado += origen[i];
            }
        } else {
            if (digitos.includes(origen[i]) || separadores.includes(origen[i])) {
                palabra += origen[i];
            } else {
                resultado += convertir_sucio(palabra);
                resultado += origen[i];
                palabra = "";
                q = 0;
            }
        }
    }
    if (palabra.length > 0) {
        resultado += convertir_sucio(palabra);
    }
    destino.value = resultado;
}

function convertir_sucio(palabra) {
    // descartar separadores del final,
    // asumiendo que son puntuación
    var final = "";
    var i = palabra.length - 1
    for (; i >= 0; --i) {
        if (separadores.includes(palabra[i])) {
            final = palabra[i] + final;
        } else {
            break;
        }
    }
    var numero = palabra.substring(0, i + 1);

    // el último separador es el que nos interesa, el resto se borran
    var numero_limpio = "";
    var ultimo_separador = -1;
    for (var i=0; i<numero.length; ++i) {
        if (separadores.includes(numero[i])) {
            ultimo_separador = i;
        } else {
            numero_limpio += numero[i];
        }
    }
    if (ultimo_separador != -1) {
        var decimales = numero.substring(ultimo_separador+1);
        var parte_entera = numero.substring(0, ultimo_separador);
        return parte_entera;
    }


    return transformarNumeroAPalabra(numero_limpio) + final;
}

function convertir() {
    var separador = ",";
    var nombre_separador = "coma";
    if (document.getElementById("punto").checked) {
        nombre_separador = "punto";
        separador = ".";
    } else if (document.getElementById("guion").checked) {
        nombre_separador = "guión";
        separador = "-";
    }
    var origen = document.getElementById("origen");
    var texto_limpio = limpiar(origen.value, separador);
    origen.value = texto_limpio;
    var destino = document.getElementById("resultado");
    var partes = texto_limpio.split(separador);
    if (partes[0].length > 15) {
        destino.value = "Escribe un número más chico.";
        return;
    }

    destino.value = transformarNumeroAPalabra(parseInt(partes[0]));

    if (partes.length == 2 && partes[1].length > 0) {
        destino.value += " " + nombre_separador;
        for (c of partes[1]) {
            destino.value += " " + transformarNumeroAPalabra(parseInt(c));
        }
    }

}

function limpiar(texto_origen, separador) {
    var texto_limpio = "";
    var separador_encontrado = false;

    for (c of texto_origen) {
        // Abusando la conversión de tipos de javascript
        if (c < 10) {
            texto_limpio += c;
        }
        if (c == separador && !separador_encontrado) {
            texto_limpio += c;
            separador_encontrado = true;
        }
    }
    return texto_limpio;
}

function transformarTresDigitos(n) {
    var salida = "";
    switch (Math.floor(n / 100)) {
        case 1:
            salida += "cien" + (n > 100 ? "to " : "");
            break;
        case 2:
            salida += "doscientos" + (n > 200 ? " " : "");
            break;
        case 3:
            salida += "trescientos" + (n > 300 ? " " : "");
            break;
        case 4:
            salida += "cuatrocientos" + (n > 400 ? " " : "");
            break;
        case 5:
            salida += "quinientos" + (n > 500 ? " " : "");
            break;
        case 6:
            salida += "seiscientos" + (n > 600 ? " " : "");
            break;
        case 7:
            salida += "setecientos" + (n > 700 ? " " : "");
            break;
        case 8:
            salida += "ochocientos" + (n > 800 ? " " : "");
            break;
        case 9:
            salida += "novecientos" + (n > 900 ? " " : "");
            break;
    }

    n %= 100;
    switch (Math.floor(n / 10)) {
        case 1:
            if (n == 10)
                salida += "diez";
            else if (n == 11)
                salida += "once";
            else if (n == 12)
                salida += "doce";
            else if (n == 13)
                salida += "trece";
            else if (n == 14)
                salida += "catorce";
            else if (n == 15)
                salida += "quince";
            else if (n == 16)
                salida += "dieciséis";
            else if (n == 17)
                salida += "diecisiete";
            else if (n == 18)
                salida += "dieciocho";
            else if (n == 19)
                salida += "diecinueve";
            return salida;
        case 2:
            if (n == 20)
                salida += "veinte";
            else if (n == 21)
                salida += "veintiún";
            else if (n == 22)
                salida += "veintidós";
            else if (n == 23)
                salida += "veintitrés";
            else if (n == 24)
                salida += "veinticuatro";
            else if (n == 25)
                salida += "veinticinco";
            else if (n == 26)
                salida += "veintiséis";
            else if (n == 27)
                salida += "veintisiete";
            else if (n == 28)
                salida += "veintiocho";
            else if (n == 29)
                salida += "veintinueve";
            return salida;
        case 3:
            salida += "treinta" + (n > 30 ? " y " : "");
            break;
        case 4:
            salida += "cuarenta" + (n > 40 ? " y " : "");
            break;
        case 5:
            salida += "cincuenta" + (n > 50 ? " y " : "");
            break;
        case 6:
            salida += "sesenta" + (n > 60 ? " y " : "");
            break;
        case 7:
            salida += "setenta" + (n > 70 ? " y " : "");
            break;
        case 8:
            salida += "ochenta" + (n > 80 ? " y " : "");
            break;
        case 9:
            salida += "noventa" + (n > 90 ? " y " : "");
            break;
    }

    switch (n % 10) {
        case 1:
            salida += "un";
            break;
        case 2:
            salida += "dos";
            break;
        case 3:
            salida += "tres";
            break;
        case 4:
            salida += "cuatro";
            break;
        case 5:
            salida += "cinco";
            break;
        case 6:
            salida += "seis";
            break;
        case 7:
            salida += "siete";
            break;
        case 8:
            salida += "ocho";
            break;
        case 9:
            salida += "nueve";
            break;
    }
    return salida;
}

function transformarNumeroAPalabra(n) {
    var salida = "";
    if (n == 0)
        return "cero ";

    if (n >= 2000000000000)
        salida += transformarTresDigitos(Math.floor(n / 1000000000000)) + " billones ";
    else if (n >= 1000000000000)
        salida += "un billón ";
    n %= 1000000000000;

    if (n >= 2000000000)
        salida += transformarTresDigitos(Math.floor(n / 1000000000)) + " mil ";
    else if (n >= 1000000000)
        salida += "mil ";
    n %= 1000000000;

    if (n >= 2000000 || salida.includes("mil"))
        salida += transformarTresDigitos(Math.floor(n / 1000000)) + " millones ";
    else if (n >= 1000000)
        salida += "un millón ";
    n %= 1000000;

    if (n >= 2000)
        salida += transformarTresDigitos(Math.floor(n / 1000)) + " mil ";
    else if (n >= 1000)
        salida += "mil ";
    n %= 1000;

    salida += transformarTresDigitos((n));
    if (n % 100 != 11 && n % 10 == 1)
        salida += "o ";

    return salida.trim().replaceAll("  ", " ").replaceAll("iúno", "iuno");
}