	//add additional quotes in sets of 2
		 var quotesArray = new Array();
		 quotesArray[0] = "\"Jodi is so great.  She just floats my boat, in a groovy kinda way.\"";
		 quotesArray[1] = "\"Her music transcends conciousness.  It's digs deep down and grabs my soul.  And then tickles it.\"";
		 quotesArray[2] = "\"Listing to Jodi sing is better than a hot shower and a cold beer.\"";
		 quotesArray[3] = "Have something great to say about Jodi or her music? Do tell in the <span style = \" font-weight: bold; \">comments</span> section!";


        (function($) {
          $.fn.slider = function startSlide(initElementID,sliderDelay) {

		     if ((quotesCounter + 1) > quotesArray.length) quotesCounter = 0;
		     $('#scrollitem0').html(quotesArray[quotesCounter]);
		     $('#scrollitem1').html(quotesArray[quotesCounter + 1]);

		     $('#scrollitem0').animate(
					{
					    left: '+=600'
					}, {
					    complete: function () {
					        $('#scrollitem0').delay(sliderDelay).animate(
								{
								    left: '+=600'
								}, {
								    complete: function () {

								        $('#scrollitem1').animate(
												{
												    left: '+=600'
												}, {
												    complete: function () {
												        $('#scrollitem1').delay(sliderDelay).animate(
																{
																    left: '+=600'
																}, {
																    complete: function () {

																        $('#scrollitem0').css('left', '-580px');
																        $('#scrollitem1').css('left', '-580px');
																        quotesCounter += 2;
																        startSlide(initElementID,sliderDelay); //repeat slider

																    } 
																});
												    } 
												});
								    } 
								});
					    } 
					});
           
          };
        })(jQuery);
