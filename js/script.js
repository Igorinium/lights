$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.gray').toggleClass('active');
	});
	$('.item-choose__item1').click(function (event) {
		$('.item-choose__item1').toggleClass('active'),
			$('.item-choose__item2').removeClass('active');

		$('.catalog-items__robe').toggleClass('active'),
			$('.catalog-items__compulite').removeClass('active');

	});
	$('.item-choose__item2').click(function (event) {
		$('.item-choose__item2').toggleClass('active');
		$('.item-choose__item1').removeClass('active');

		$('.catalog-items__compulite').toggleClass('active'),
			$('.catalog-items__robe').removeClass('active');
	});
});

let p = 2;
if (outerWidth < 1130) {
	p = 1;

} else {
	p = 2;

}
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.next-button',
		prevEl: '.prev-button'
	},

	slidesPerView: 2,
	watchOverflow: true,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	slideToClickedSlide: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1130: {
			slidesPerView: 2,
		},

	},
});
let myImageSlider2 = new Swiper('.rent-image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.rent-next-button',
		prevEl: '.rent-prev-button'
	},
	loop: true,
});