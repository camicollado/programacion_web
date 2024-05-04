// Resultados del modelo ML
const resultadosReducidos = [
    {"app": "Instagram", "predModelo": 4, "ratingReal": 4},
    {"app": "Whatsapp", "predModelo": 4, "ratingReal": 4},
    {"app": "TikTok", "predModelo": 5, "ratingReal": 4},
    {"app": "Cuando subo", "predModelo": 1, "ratingReal": 2},
    {"app": "Dia: La app de ofertas", "predModelo": 2, "ratingReal": 3},
    {"app": "Mercado Pago", "predModelo": 3, "ratingReal": 4},
    {"app": "Roblox", "predModelo": 4, "ratingReal": 4},
    {"app": "Pou", "predModelo": 3, "ratingReal": 4},
    {"app": "Subway Surfers", "predModelo": 4, "ratingReal": 4},
    {"app": "Flow", "predModelo": 5, "ratingReal": 3},
    {"app": "iLovePDF", "predModelo": 4, "ratingReal": 4},
    {"app": "Uber Eats", "predModelo": 4, "ratingReal": 4},
    {"app": "Calm (meditacion)", "predModelo": 3, "ratingReal": 4}
  ]

  console.table(resultadosReducidos)

// select app
const selectApps = document.getElementById('selectApps');

resultadosReducidos.forEach(function(app) {
  const opcion = document.createElement('option');
  opcion.text = app.app;
  selectApps.add(opcion);
});


// select rating
const selectRating = document.getElementById('selectRating');

const ratings = [
    {"rating":1},
    {"rating":2},
    {"rating":3},
    {"rating":4},
    {"rating":5}
]

ratings.forEach(function(ratings) {
  const opcion = document.createElement('option');
  opcion.text = ratings.rating;
  selectRating.add(opcion);
});

// Variables
let appSeleccionada;
let ratingSeleccionado;

// print de select app
selectApps.addEventListener('change', function(evento) {
    appSeleccionada = evento.target.value;
    console.log('App seleccionada:', appSeleccionada);
    
    //print info
    const appEncontrado = resultadosReducidos.find(function(app) {
        return app.app === appSeleccionada;
    });

    console.log(appEncontrado.app); 
    console.log(appEncontrado.ratingReal); 
    console.log(appEncontrado.predModelo); 
});

// print de select rating
selectRating.addEventListener('change', function(evento) {
    ratingSeleccionado = parseInt(evento.target.value);
    console.log('Rating seleccionado:', ratingSeleccionado);
});

let predModelo;
let ratingReal;
let ganador;

// Agregar evento de clic al botón de calcular
calcularBtn.addEventListener('click', function() {
    // valores select
    appSeleccionada = selectApps.value;
    ratingSeleccionado = parseInt(selectRating.value); 

    // Buscar en resultadosReducidos la app seleccionada
    const resultadoApp = resultadosReducidos.find(function(item) {
        return item.app === appSeleccionada;
    });

    // Verificar
    if (resultadoApp) {
        const ratingReal = resultadoApp.ratingReal;
        const predModelo = resultadoApp.predModelo;

        // Realizar los cálculos necesarios

        //const difModelo = Math.abs(ratingReal - predModelo);
        //const difUser = Math.abs(ratingReal - ratingSeleccionado);

        if (predModelo === ratingReal && ratingSeleccionado === ratingReal) {
            const ganador = "Ambos";
            console.log('El ganador es:', ganador);
        } else if (predModelo === ratingReal && ratingSeleccionado !== ratingReal) {
            const ganador = "Algoritmo";
            console.log('El ganador es:', ganador);
        } else if (predModelo !== ratingReal && ratingSeleccionado === ratingReal) {
            const ganador = "Vos";
            console.log('El ganador es:', ganador);
        } else {
            console.log('Ninguno');
        }
    } else {
        console.log('No se encontró la aplicación seleccionada en los datos.');
    }
    // Actualizar el contenido en el HTML
    document.getElementById('tuRating').textContent = ratingSeleccionado;
    document.getElementById('ratingAlgoritmo').textContent = predModelo;
    document.getElementById('ratingReal').textContent = ratingReal;
    document.getElementById('ganador').textContent = ganador;

    // Mostrar los resultados
    document.querySelector('#resultados').style.display = 'block';

});

