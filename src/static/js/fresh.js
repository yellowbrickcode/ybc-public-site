$(document).ready(function(){
    
    //Preloader
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
    })

    //Mobile menu toggle
    if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function(){

            var menu_id = $(this).attr('data-target');
            $(this).toggleClass('is-active');
            $("#"+menu_id).toggleClass('is-active');
            $('.navbar.is-light').toggleClass('is-dark-mobile')
        });
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 50) {
                $("#navbar-clone").addClass('is-active');
            } else{
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }

    //Init feather icons
    feather.replace();

    //reveal elements on scroll so animations trigger the right way
    var $window           = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch           = Modernizr.touch;

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'),10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }

    // Back to Top button behaviour
    var pxShow = 600;
    var scrollSpeed = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 550, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Set prism defaults
    Prism.plugins.NormalizeWhitespace.setDefaults({
        "remove-initial-line-feed": true
    });

    // Wire up contact form
    $("#contact-button").on("click", function() {
        var name = $("#contact-name").val();
        var email = $("#contact-email").val();
        var message = $("#contact-message").val();
        var validationMessage = "";

        if(!name) {
            validationMessage = appendValidationMessage(validationMessage, "- Please enter your name so I know who's getting in touch");
        }

        if(!email) {
            validationMessage = appendValidationMessage(validationMessage, "- Please enter an email address so I can reply");
        } else if(!validateEmail(email)) {
            validationMessage = appendValidationMessage(validationMessage, "- Your email address looks invalid. Double check it and try again");
        }

        if(!message) {
            validationMessage = appendValidationMessage(validationMessage, "- Please enter a message so I know how to help");
        }

        if(validationMessage) {
            $("#contact-validation").html(validationMessage).removeClass("is-hidden");
        } else {
            var contactData = {
                name: name,
                email: email,
                message: message,
                host: window.location.origin
            };

            $.post("https://hooks.zapier.com/hooks/catch/4057868/e0l6a0/", JSON.stringify(contactData)).done(function(result) {
                $("#contact-form").addClass("is-hidden");
                $("#contact-success").removeClass("is-hidden");
                $("#contact-error").addClass("is-hidden");
                $("#contact-validation").addClass("is-hidden");
            }).error(function(result) {
                $("#contact-error").removeClass("is-hidden");
                $("#contact-validation").addClass("is-hidden");
            });
        }
    });

    function appendValidationMessage(content, message) {
        if(content) {
            content += "<br/>";
        }
        content += message;
        return content;
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
})