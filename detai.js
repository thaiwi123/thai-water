window.addEventListener('scroll', function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 200) { // Adjust this value to change when the button appears
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  