
function Encriptar() {
  const encriptar = document.getElementById("codigoEncriptado").value;
    const mensajeEncriptado = encriptar
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("MensajeEncriptado").value = mensajeEncriptado;
  }


function Desencriptar() {
  const Desencriptar = document.getElementById("codigoEncriptado").value;
  const mensajeDesencriptado = Desencriptar
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.getElementById("MensajeEncriptado").value = mensajeDesencriptado;
}

function Limpiar() {
  document.getElementById("MensajeEncriptado").value = " ";
  document.getElementById("codigoEncriptado").value = " ";

}
function Copiar() {
  const copiarTexto = document.getElementById("MensajeEncriptado");
  const textoVacio = false;
  var contador = 1;
  if (copiarTexto.value == textoVacio) {
   swal("Mensaje", "la caja de  texto esta vacia", "info");
  } 
  else if(copiarTexto.value != textoVacio) {
    copiarTexto.select();
    document.execCommand("copy");
    while (i = 1 <= contador) {
      document.getElementById("MensajeEncriptado").value = " ";
      swal("Texto Copiado", "El texto ha sido copiado exitosamente", "success");
     break;
    }
  }
}

