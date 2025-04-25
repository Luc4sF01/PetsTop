const wrapper = document.querySelector('.slider-wrapper');
const cards = wrapper.children;
let index = 0;

function updateSlider() {
  const width = wrapper.getBoundingClientRect().width + 20; // +gap
  wrapper.style.transform = `translateX(-${index * width}px)`;
}

document.querySelector('.arrow.prev').addEventListener('click', () => {
  if (index > 0) index--;
  updateSlider();
});

document.querySelector('.arrow.next').addEventListener('click', () => {
  if (index < cards.length - 1) index++;
  updateSlider();
});

// inicia
updateSlider();
