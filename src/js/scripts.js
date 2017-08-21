 
	var burgerToggle = document.querySelector(".site-header__hamburger");
	var navToggle = document.querySelector(".site-header__navigation-wrap");

	burgerToggle.addEventListener('click', function() {

		burgerToggle.classList.toggle("is-active");
		navToggle.classList.toggle("is-collapsed");

	}, false);

 