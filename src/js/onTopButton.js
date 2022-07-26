const topBtn = document.querySelector(".top_button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    topBtn.classList.remove('is-hidden')
  }
   else {
    topBtn.classList.add('is-hidden')
  }
}

topBtn.addEventListener('click', topFunction);

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

