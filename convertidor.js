function convertir() {
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("resultado");
    var texto = "";
    if (isNaN(origen)) {
        texto = "Eso no es un número.";
    } else if (origen.length > 15) {
        texto = "Escribe un número más chico.";
    } else {
        texto = transformarNumeroAPalabra(parseInt(origen));
    }
    destino.value = texto;
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
    if (salida.Length > 4 && salida[salida.Length - 4] == 'ú')
        salida = salida.Substring(0, salida.Length - 4) + "uno ";

    return salida.replaceAll("  ", " ");
}