/* GLIDE JS CAROUSEL */
const slider1 = document.getElementById("glide_1");
if (slider1) {
	new Glide(slider1, {
		type: "carousel",
		startAt: 0,
		autoPlay: 3000,
		hoverpause: true,
		perView: 1,
		animationDuration: 800,
		animationTimingFunc: "linear",
	}).mount();
}

/* ----HERO ----*/

/* ----END OF HERO ----*/
