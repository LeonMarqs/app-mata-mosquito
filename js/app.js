var heigh;
var width;
var lifes = 1;

function ajustSizeGame() {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log(width, height);
};

ajustSizeGame();


function randomPosition() {
  // Remover mosquito anterior (caso exista)
  if (document.getElementById('fly')) {
    document.getElementById('fly').remove();

    if (lifes > 3) {
      window.location.href = 'gameover.html';

    } else {
      
      document.getElementById('l' + lifes).src = 'img/coracao_vazio.png';
      lifes++;
    }
  }

  // Posição de spawn dos mosquitos
  var xposition = Math.floor(Math.random() * width) - 90;
  var yposition = Math.floor(Math.random() * height) - 90;

  // Lidar com posições negativas
  xposition = xposition < 0 ? 0 : xposition;
  yposition = yposition < 0 ? 0 : yposition;

  console.log(xposition, yposition);

  // Criação de um novo elemento HTML através do DOM
  const fly = document.createElement('img');
  fly.src = 'img/mosquito.png';
  fly.className = randomSize() + ' ' + randomSide();
  fly.style.position = 'absolute';
  fly.style.left = xposition + 'px';
  fly.style.top = yposition + 'px';
  fly.id = 'fly';
  fly.onclick = function() {
    this.remove();
  };

  document.body.appendChild(fly);

};

function randomSize() {
  let classe = Math.floor(Math.random() * 3); //return: 0 || 1 || 2 
  
  switch(classe) {
    case 0:
      return 'fly1';
    case 1:
      return 'fly2';
    case 2:
      return 'fly3';
  };
  
};

function randomSide() {
  let classe = Math.floor(Math.random() * 2); //return: 0 || 1 || 2 

  switch(classe) {
    case 0:
      return 'sideA';
    case 1:
      return 'sideB';
  };
}
