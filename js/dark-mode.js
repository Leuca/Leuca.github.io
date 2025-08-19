function detectDarkMode() {

    // Change settings for dark mode if enabled
    if (window.matchMedia("(prefers-color-scheme:dark)").matches)
    {
        // Set global background to dark
        let html = document.querySelector('html');
        html.classList.add('bg-dark');

        // Set body background to dark
        let body = document.querySelector('body');
        body.classList.add('bg-dark');
        body.classList.add('text-bg-dark');

        // Set navbar to readable text
        let brand = document.querySelector('.navbar');
        brand.classList.add('navbar-dark');


        // If present change any button to dark
        let buttons = document.querySelectorAll('.btn');
        for (let i = 0; i < buttons.length; i++)
        {
            buttons[i].style.filter = 'invert(1)';
        }

        // Invert accordion colors
        let accordions = document.querySelectorAll('.accordion');
        for (let i = 0; i < accordions.length; i++)
        {
            accordions[i].style.filter = 'invert(1)';
        }

        // Invert Vim icon so that it is diplayed with the true colors
        let vimicon = document.querySelector('#vim');
        if (vimicon != null)
        {
            vimicon.style.filter = 'grayscale(100%)';
        }

		// Switch to dark icons
		let icons = document.querySelectorAll('img');
		for (var i = 0; i < icons.length; i++) {
			lightsrc = icons[i].src;
			darksrc = lightsrc.replace("light", "dark");
			icons[i].src = darksrc;
		}
    }

}
