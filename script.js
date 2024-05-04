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