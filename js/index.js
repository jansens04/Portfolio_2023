const menuToggle = document.querySelector('.menuToggle');
const links = document.querySelector('.links');
menuToggle.addEventListener('click', () => {
  links.classList.toggle('show');
});

// Menu Scroll
let indexSlider = 1;
const imgCarosel = document.querySelectorAll('.crsl');
const carosel = document.querySelector('.carosel');
const icons = document.querySelectorAll('i');
icons.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.classList.contains('btnRight')) {
      indexSlider++;
      if (indexSlider > imgCarosel.length - 1) {
        indexSlider = 0;
      }
      carosel.style.transform = `translate(-${indexSlider * 100}%)`;
    } else if (e.classList.contains('btnLeft')) {
      indexSlider--;
      if (indexSlider < 1) {
        indexSlider = imgCarosel.length - 1;
      }
      carosel.style.transform = `translate(-${indexSlider * 100}%)`;
    }
  });
});
