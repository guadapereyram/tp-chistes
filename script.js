const chistes = [
  "¿Por qué la galleta fue al médico? Porque se sentía crujiente.",
  "¿Qué hace una uva cuando la pisan? ¡Nada, solo da un pequeño quejido!",
  "¿Por qué el tomate se puso rojo? Porque vio al pepino desnudo.",
  "¿Qué le dijo el pan al otro pan? ¡Te presento a mi miga!",
  "¿Qué hace una cebolla en una fiesta? ¡Llora de la emoción!",
  "¿Cómo se despiden los vegetales? ¡Hasta la pasta!",
  "¿Qué hace un plátano en el gimnasio? ¡Se entrena para no resbalar!",
  "¿Por qué el huevo no contó su chiste? Porque no quería romperse de la risa.",
  "¿Cómo se llama el campeón de los postres? Flan-tástico.",
  "¿Qué hace una aceituna en la calle? ¡Nada, solo está oli-via!"
];

let indice = 0;

function mostrarChiste() {
  document.getElementById("chiste").textContent = chistes[indice];
}

function siguienteChiste() {
  indice = (indice + 1) % chistes.length;
  mostrarChiste();
}

function anteriorChiste() {
  indice = (indice - 1 + chistes.length) % chistes.length;
  mostrarChiste();
}

// Inicializa el primer chiste al cargar
document.addEventListener("DOMContentLoaded", mostrarChiste);

// Menú móvil (se necesita también en index)
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}
