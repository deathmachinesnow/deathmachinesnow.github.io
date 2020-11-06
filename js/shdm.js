

window.onload = (event) => {
	new fullpage('#fullPage', {
		autoScrolling:true,
		scrollHorizontally:false,
		licenseKey: 'Y1111111111111111111',
		onLeave: function( origin, destination){
			if (origin.index >= 0) {
				$('body')
					.removeClass(`v${origin.index}`)
					.addClass(`v${destination.index}`);

			}
		}
	});

};
