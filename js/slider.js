/* GLIDE JS CAROUSEL */
/* ========= HERO ======*/
const slider1 = document.getElementById("glide_1");
const slider2 = document.getElementById("glide_2");
const slider3 = document.getElementById("glide_3");
const slider4 = document.getElementById("glide_4");
if (slider1) {
	new Glide(slider1, {
		type: "carousel",
		startAt: 0,
		autoPlay: 3000,
		hoverpause: true,
		perView: 1,
		// animationDuration: 800,
		animationTimingFunc: "linear",
	}).mount();
}

/* =========== END OF HERO ======*/

/* ========== Latest Products ============== */
if (slider2) {
	new Glide(slider2, {
		type: "carousel",
		startAt: 0,
		hoverpause: true,
		perView: 4,
		animationDuration: 800,
		animationTimingFunc: "ease-in-out",
		breakpoints: {
			1200: {
				perView: 3,
			},

			768: {
				perView: 2,
			},
		},
	}).mount();
}
/* ==========End of  Latest Products ============== */

/*=========== Testimonial ============ */
if (slider3) {
	new Glide(slider3, {
		type: "carousel",
		startAt: 0,
		hoverpause: true,
		perView: 1,
		animationDuration: 800,
		animationTimingFunc: "ease-in-out",
	}).mount();
}
/*=========== Testimonial ============ */

/* ======== news ======== */
if (slider4) {
	new Glide(slider4, {
		type: "carousel",
		startAt: 0,
		hoverpause: true,
		// autoPlay: 2000,
		perView: 1,
		animationDuration: 800,
		animationTimingFunc: "ease-in-out",
	}).mount();
}
/* ========End of news ======== */
