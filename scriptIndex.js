const campoTexto = document.getElementById('nombre');
let nombreSE
campoTexto.addEventListener('input', function(event) {
    nombreSE=event.target.value.replace(/\s+/g,' ')
    console.log('El contenido del campo sin espacios es:', nombreSE);
});

const campoTexto2 = document.getElementById('mensaje');
let nombreSE2
campoTexto2.addEventListener('input', function(event) {
    nombreSE2=event.target.value.replace(/\s+/g,' ')
    console.log('El contenido del campo sin espacios es:', nombreSE2);
});
