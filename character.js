// character.js
const frontImg = 'front.png';
const backImg = 'back.png';

const layerFront = document.getElementById('layer-front');
const layerBack = document.getElementById('layer-back');

layerFront.style.backgroundImage = `url(${frontImg})`;
layerBack.style.backgroundImage = `url(${backImg})`;

// Ban d?u, back ?n
layerBack.style.opacity = 0;

// Góc xoay (0 ? 360)
let angle = 0;

// C?p nh?t ?nh theo chu?t
function updateCharacter() {
  // 0°–179°: show front, 180°–359°: show back
  if(angle < 180){
    layerFront.style.opacity = 1;
    layerBack.style.opacity = 0;
  } else {
    layerFront.style.opacity = 0;
    layerBack.style.opacity = 1;
  }

  // Optional: xoay nh? layer d? fake depth
  layerFront.style.transform = `rotateY(${angle}deg)`;
  layerBack.style.transform = `rotateY(${angle-180}deg)`; // back xoay d?i x?ng
}

// Xoay theo chu?t
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const width = window.innerWidth;
  angle = (mouseX / width) * 360;
  updateCharacter();
});
