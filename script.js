const textarea = document.querySelector(".textoUsuario"); //Texto que escribe el usuario guardado en variable textarea
const mensaje = document.querySelector(".area-texto"); //Texto encriptado o desencriptado como mensaje al usuario guardado en variable mensaje
const copiar = document.querySelector(".copiar") //Obtiene el elemento boton copiar

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textarea.value); //Se realiza una constante para recibir la funcion con el valor de textarea
    mensaje.value = textoEncriptado;
    textarea.value ="";
    mensaje.style.backgroundImage = "none";
    copiar.textContent = "Copiar";
}

function encriptar(stringEncriptado){ //tendra un parametro 
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]; //Esto corresponde a un conjunto de arreglos para poder encriptar
    stringEncriptado = stringEncriptado.toLowerCase(); // pasamos todo a minuscula

    for(let i=0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){ // si la letra que estamos buscando esta en el string (Llave verificada: matrizCodigo, indice i, posicion 0)
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]); //Se utiliza replaceAll para sustituir todo el texto
        }
    }    
    return stringEncriptado;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value); //Se realiza una constante para recibir la funcion con el valor de textarea
    mensaje.value = textoEncriptado;
    textarea.value ="";
    copiar.textContent = "Copiar";
}

function desencriptar(stringDesencriptado){ //tendra un parametro 
    let matrizCodigo = [["u", "ufat"],["o", "ober"],["a", "ai"],["i","imes"],["e", "enter"]]; //El conjunto de arreglos se invierte para no cometer errores, Ejemplo: James
    stringDesencriptado = stringDesencriptado.toLowerCase(); // pasamos todo a minuscula

    for(let i=0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){ // si la letra que estamos buscando esta en el string (Llave verificada: matrizCodigo, indice i, posicion 1)
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]); //Se utiliza replaceAll para sustituir todo el texto
        }
    }    
    return stringDesencriptado;
}

function botonCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    copiar.textContent = "Copiado";
}

function botonBorrar(){
    textarea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(imagenes/Muneco.png)";
    copiar.textContent = "Copiar";
}
