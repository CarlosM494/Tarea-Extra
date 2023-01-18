import './style.css';

//Primer Ejercicio

var btnObjects = document.getElementById('objects');
btnObjects.addEventListener('click', function () {
  var n = prompt('Ingrese la cantidad de objetos que quiere añadir');
  n = parseInt(n);
  for (var i = 0; i < n; i++) {
    var circles = document.createElement('div');
    circles.classList.add('circle');
    circles.innerText = i + 1;
    document.body.appendChild(circles);
  }
});

//Segundo Ejercicio

var btnDivs = document.getElementById('divs');
btnDivs.addEventListener('click', function () {
  var divs = Array.from(document.querySelectorAll('div.box'));
  divs.forEach((d) => {
    var width = d.style.width.slice(0, -2);
    var color = d.style.background;
    if ((width > 50) & (color == 'green')) {
      document.body.removeChild(d);
    }
  });
});

//Tercer Ejercicio

var btnClicks = document.getElementById('clicks');
var btnReset = document.getElementById('reinicio');
var count = 0;
btnClicks.addEventListener('click', function (evt) {
  count = count + 1;

  if (count >= 20) {
    alert('El contador se ha terminado, reinicie el conteo');
    evt.preventDefault();
    btnClicks.disabled = true;
    btnClicks.style.opacity = 0.5;
  }
  console.log(count);
});

btnReset.addEventListener('click', function () {
  btnClicks.disabled = false;
  count = 0;
});

//Cuarto Ejercicio

var select = document.getElementsByTagName('select')[0];

select.addEventListener('click', function () {
  var colorValue = select.value;
  document.getElementById('canva').style.background = colorValue;
});

//Quinto Ejercicio

var liElements = document.getElementsByClassName('game');
liElements = Array.from(liElements);
liElements.forEach((games) => {
  //console.log(games)
  games.addEventListener('click', function (event) {
    var text = event.target.innerText.length;
    console.log(text);
    if (text >= 10) {
      event.target.style.fontStyle = 'italic';
    }

    if (text >= 15) {
      event.target.style.fontWeight = 'bold';
    }

    if ((text > 20) & (text < 25)) {
      let list = document.createElement('ul');
      let textList = document.createElement('li');
      list.appendChild(games);

      document.body.appendChild(list);
      
    }
  });
});
