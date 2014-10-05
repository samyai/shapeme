(function () {

    'use strict';

    /**
     * @class HomeController
     * @classdesc Controller of the news page
     */
    function LandingController ($scope, $timeout) {
        $timeout(function(){
            $('section[data-type="background"]').each(function(){
                // declare the variable to affect the defined data-type
                var $scroll = $(this);

                $(window).scroll(function() {
                    // HTML5 proves useful for helping with creating JS functions!
                    // also, negative value because we're scrolling upwards
                    var yPos = -($(window).scrollTop() / $scroll.data('speed'));

                    // background position
                    var coords = '50% '+ yPos + 'px';

                    // move the background
                    $scroll.css({ backgroundPosition: coords });
                }); // end window scroll
            });  // end section function
        }, 500);
    }

    angular
        .module('shapeme')
        .controller('LandingController', ['$scope', '$timeout', LandingController]);

})();