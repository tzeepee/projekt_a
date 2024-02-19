let table;

function preload() {
  table = loadTable('schau_fil_beziehung.csv', 'csv', 'header');
}

let actors = {};
let movies = {};

function setup() {
  createCanvas(800, 800);
  for (let row of table.rows) {
    let actor_id = row.get('schauspieler_id');
    let actor_name = row.get('schauspieler_name');
    let movie_id = row.get('film_id');
    let movie_name = row.get('film_name');
    // Erzeugen Sie zufällige x- und y-Koordinaten für jeden Knoten
    let x = random(width);
    let y = random(height);
    // Speichern Sie die Positionen der Schauspieler und Filme
    if (!actors[actor_id]) {
      actors[actor_id] = {x, y};
    }
    if (!movies[movie_id]) {
      movies[movie_id] = {x, y};
    }
    data.push({actor_id, actor_name, movie_id, movie_name});
  }
}

function draw() {
  background(220);
  for (let item of data) {
    let actor_id = item.actor_id;
    let movie_id = item.movie_id;
    // Zeichnen Sie die Knoten an den gespeicherten Positionen
    ellipse(actors[actor_id].x, actors[actor_id].y, 20, 20);
    ellipse(movies[movie_id].x, movies[movie_id].y, 20, 20);
    // Zeichnen Sie eine Linie zwischen den Schauspieler- und Filmknoten
    line(actors[actor_id].x, actors[actor_id].y, movies[movie_id].x, movies[movie_id].y);
  }
}
