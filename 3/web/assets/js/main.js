

$( document ).ready(function() {
			 var shrinkHeader = 150;
			  $(window).scroll(function() {
				var scroll = getCurrentScroll();
				  if ( scroll >= shrinkHeader ) {
					   $('header').addClass('sticky');
					}
					else {
						$('header').removeClass('sticky');
					}
			  });
			function getCurrentScroll() {
				return window.pageYOffset;
				}
			});


document.querySelectorAll('a[href^="#approach"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


