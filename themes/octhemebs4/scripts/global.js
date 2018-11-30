/**
 * @file
 * Global JS settings for the Joule theme.
 */

  (function ($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.banner = {

        attach: function (context, settings) {
          $(".navbar-toggler", context).click(function(){

            if ($("#block-clinicalresources").hasClass('show')){
              $(".clinical--link").click();
            }
          })
        }

    };
})(jQuery, Drupal, drupalSettings);