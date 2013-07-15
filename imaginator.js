$(document).ready(function() {
	$('img').first().addClass('active');
	firstImageClone = $('img').first().clone();
	firstImageClone.removeAttr('width');
	firstImageClone.removeAttr('data-caption');
	$('#panel').append(firstImageClone);

	function newPanelFadeIn(clickedImage) {
		newPanelImage = $(clickedImage).clone();
		newPanelImage.removeAttr('width data-caption');
		$('#panel').append(newPanelImage.fadeIn(4000));
	};

	$('#sidebar img').click(function(){
		clickedImage = $(this);
		$('.active').removeClass('active');
		clickedImage.addClass('active');
  		// $('#panel img').fadeOut('slow', function() {
  		// 	$('#panel img').remove();
  		// 	newPanelFadeIn(clickedImage);
  		// });
		newPanelFadeIn(clickedImage);
		

		$('#panel img').first().fadeOut(3000, function(){
			$('#panel img').first().remove();
		});

  		
  		
  	

	});

	
});

