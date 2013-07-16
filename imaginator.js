$(document).ready(function() {
	$('img').first().addClass('active');
	firstImageClone = $('img').first().clone();
	firstImageClone.removeAttr('width');
	$('#panel').append(firstImageClone);
	$('#panel').prepend("<div id=caption>" + $('img').first().attr('data-caption') + "</div>");


	function newPanelFadeIn(clickedImage) {
		newPanelImage = $(clickedImage).clone();
		newPanelImage.removeAttr('width');
		$('#panel').append(newPanelImage.fadeIn(500));
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
		$('#panel img').first().fadeOut(500, function(){
			$('#panel img').first().remove();
		});
		newCaption = $(this).attr('data-caption');
		$('#caption').first().remove();
		$('#panel').prepend("<div id=caption>" + newCaption + "</div>");
	});	
});

