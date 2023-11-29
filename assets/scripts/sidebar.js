const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
  console.log($wrapper.classList.contains('toggled'));
 
});

// Hide all item in .carousel-item initially
