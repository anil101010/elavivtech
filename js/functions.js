;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		isTouch();

		//Btn Tobottom
		$('.btn-tobottom').on('click', function(e){
			e.preventDefault();

			var $section = $(this).parents('section');
			var newPosition = $section.offset().top + $section.outerHeight();

			$('html, body').animate({
				scrollTop: newPosition
			}, 'slow');

		});

		// Slick Slider
		$('.slider.slider-home .slides').slick({
			autoplay: true,
			autoplaySpeed: 6000,
			fade: true,
			arrows: true,
			dots: true
		});

		$('.slider.slider-testimonials .slides').slick({
			autoplay: true,
			autoplaySpeed: 6000,
			fade: false,
			adaptiveHeight: true,
			arrows: false,
			dots: true
		});

		$('.slider.slider-team .slides').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			fade: false,
			arrows: true,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: 0,
			responsive: [
				{
					breakpoint: 1024,
			        settings: {
			          slidesToShow: 3
			        }
				},
				{
					breakpoint: 768,
			        settings: {
			          slidesToShow: 1
			        }
				}
			]
		});


		// Header Search
		$('.nav-utilities .search-toggle').on('click', function (e) {
			e.preventDefault();

			$(this).toggleClass('active')

			.next('.form-search').toggleClass('active')

			$('.search-field').get(0).focus();
		})

		// Select Placeholder
		$('.form-contact select').on('click', function (e) {
			$('.form-contact select').addClass('selected')
		})



		// Btn Menu
		$('.btn-menu').on('click', function (event) {
			$(this).toggleClass('active');

			$('.nav').toggleClass('active');

			if ($('.sub-menu').length) {
				$('.sub-menu').slideUp();

				$('.nav .menu > li').removeClass('current')
			};

			event.preventDefault();
		});

		// Magnific
		$('.video-popup').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.showcases a.video-item').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			gallery:{
				enabled:true
			}
		});

		$('.employee-popup').magnificPopup({
			type: 'inline',
			preloader: false,
			midClick: true,
			removalDelay: 160,
			mainClass: 'my-mfp-zoom-in'
		});

		// Videos Slider
		//if( $('.videos-slider').length ) {
			$('.videos-slider').slick({
				arrows: true,
				dots: false,
				autoplay: false,
				slidesToShow: 3,
				responsive: [
					{
						breakpoint: 1024,
				        settings: {
				          slidesToShow: 2
				        }
					},
					{
						breakpoint: 768,
				        settings: {
				          slidesToShow: 1
				        }
					}
				]
			});
		//}

	});

	function isTouch () {
		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		if ( isMobile.any ) {
			$('.nav li').on('click', 'a', function(e) {
				var $menu_el = $(this);
				var $sub_menu = $menu_el.parent().children('.sub-menu');

				if ( $('.nav.active').length ) {
					if ( $sub_menu.length && !$sub_menu.is(':visible') ) {
						e.preventDefault();

						$(this).parent().parent().find('.sub-menu').not(this).slideUp();

						$(this).parent().addClass('current').siblings().removeClass('current');

						$sub_menu.slideDown();
					};
				}
			});
		}
	}

	$win.on('load resize', function() {
		setTimeout(function() {
			$('#Comments').closest('.mktoFormRow').addClass('textareaWrap')
		}, 1000);

	});

	$win.on('load resize orientationchange', function() {
		$(".article-secondary .article-content").equalizeHeight();
	});

	$.fn.equalizeHeight = function() {
		var maxHeight = 0, itemHeight;

		for (var i = 0; i < this.length; i++) {
			itemHeight = $(this[i]).height();
			if (maxHeight < itemHeight) {
				maxHeight = itemHeight;
			}
		}

		return this.height(maxHeight);
	};

})(jQuery, window, document);
