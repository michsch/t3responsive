/**
 * t3responsive - jQuery plugin to make TYPO3 (Version 4.5.x) work with responsive web design
 * @requires jQuery v1.4.1
 *
 * 
 *
 * Copyright (c) 2011 
 * Michael Schulze
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 0.1 alpha
 *
 * Usage:
 	$(document).ready(function(){
		$.t3responsive();
	});
 */

(function( $ ){
	var methods = {
    init : function( options ) {
      var defaults = {
        maxWidth : '980',
				widthElements : '.page_margins'
      }
				, o = $.extend(defaults, options || {});
      
			var windowWidth = window.innerWidth;

			if (windowWidth < o.maxWidth) {
				$(o.widthElements).width(o.maxWidth);
				$('body').attr('style', '-webkit-text-size-adjust: none;');
			}

			/* first test - single image */
			$('.csc-textpic').each(function() {
				var container = $(this)
					, width = $(this).width()
					, image = $(this).find('img')
					, imgWidth = image.attr('width')
					, imgHeight = image.attr('height')
					, percentWidth = imgWidth / width
					, percentToWindow = imgWidth / o.maxWidth;

				if (percentWidth < 0.3 && window.innerWidth < 480) { percentWidth = 0.5 }

				/* delete fixed width and height */
				//image.attr('width', 'auto').attr('height','auto');

				if ($.browser.msie) {
					//alert('true');
					var inlineStyle = 'width:'+percentWidth * 100+'%; min-height:'+imgHeight;
				} else {
					var inlineStyle = 'width:'+percentWidth * 100+'%';
				}

				/* write percent in inline style */
				container.find('div.csc-textpic-imagewrap').attr('style',inlineStyle);
			});

			$(o.widthElements).attr('style','');
			
      return true;
    },
    update: function(content){
     	
    }
  };

  $.t3responsive = function( method ) {
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  };

})(jQuery);