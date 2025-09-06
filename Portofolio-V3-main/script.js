const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	if (window.scrollY >= 56) {
		nav.classList.add("navbar-scrolled");
	} else if (window.scrollY < 56) {
		nav.classList.remove("navbar-scrolled");
	}
});

$('.card').tilt({
    glare: true,
    maxGlare: .5,
	perspective: 600, // Mengurangi jarak pandang perspektif
	max: 5, // Mengurangi jarak jatuh elemen selama efek tilt
	scale: 1, // skala elemen ketika di-hover
	speed: 1000, // kecepatan animasi
	transition: true, // efek transisi
	reset: true, // mengatur elemen kembali ke posisi awal ketika mouse meninggalkan elemen
	easing: "cubic-bezier(.03,.98,.52,.99)" // pengaturan kurva animasi
})


var typed = new Typed('#typed-text', {
	strings: ["front end web devoloper", "front end web devoloper"],
	typeSpeed: 30,
	startDelay: 700,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
  });


/*   $('.card-project').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3
  });
 */
  
  $('.card-project').slick({
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 1000,
	speed: 1000,
	cssEase: 'linear',
	infinite: true,
	dots: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	centerPadding: '25px', /* Jarak padding sebesar 20px pada layar desktop */
	arrows: false,
	pauseOnHover: true,
	pauseOnFocus: false,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  centerPadding: '5px' /* Jarak padding sebesar 10px pada layar mobile */
		}
	  }
	]
  });


 

  