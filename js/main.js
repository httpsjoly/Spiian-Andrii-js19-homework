function generateRandomColor() {
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);

  return `rgb(${color1}, ${color2}, ${color3})`;
}


function moveSquare() {
  const quadrate = document.querySelector('.block');
  let bodyWidth = window.innerWidth;
  let bodyHeight = window.innerHeight;

  const randomLeftRight = Math.floor(Math.random() * (bodyWidth - 100));
  const randomTopBottom = Math.floor(Math.random() * (bodyHeight - 100));

  quadrate.style.left = `${randomLeftRight}px`;
  quadrate.style.top = `${randomTopBottom}px`;
}


function changeColor() {
  const quadrate = document.querySelector('.block');
  quadrate.style.backgroundColor = generateRandomColor();
}


setInterval(changeColor, 500);

setInterval(moveSquare, 1000);
