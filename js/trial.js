
jQuery(document).ready(function() {
    function close_about_section() {
        jQuery('.about-content .about-section-title').removeClass('active');
        jQuery('.about-content .about-section-content').slideUp(300).removeClass('open');
    }

    jQuery('.about-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');

        if(jQuery(e.target).is('.active')) {
            close_about_section();
        }else {
            close_about_section();

            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.about-content ' + currentAttrValue).slideDown(300).addClass('open'); 
        }

        e.preventDefault();
    });
    
    
    $('.Count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 4000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
});
