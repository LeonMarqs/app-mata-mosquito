var heigh;
var width;

function ajustSizeGame() {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log(width, height);
};

ajustSizeGame();


function randomPosition() {
  // Spawn dos mosquitos
  var xposition = Math.floor(Math.random() * width) - 90;
  var yposition = Math.floor(Math.random() * height) - 90;

  // Lidar com posições negativas
  xposition = xposition < 0 ? 0 : xposition;
  yposition = yposition < 0 ? 0 : yposition;

  console.log(xposition, yposition);

  // Criação de um novo elemento HTML através do DOM
  const fly = document.createElement('img');
  fly.src = 'img/mosquito.png';
  fly.className = randomSize();
  fly.style.position = 'absolute';
  fly.style.left = xposition + 'px';
  fly.style.top = yposition + 'px';

  document.body.appendChild(fly);
};

function randomSize() {
  let classe = Math.floor(Math.random() * 3); //return: 0 || 1 || 2 
  console.log(classe);
  
  switch(classe) {
    case 0:
      return 'fly1';
    case 1:
      return 'fly2';
    case 2:
      return 'fly3';
  };
  
};
