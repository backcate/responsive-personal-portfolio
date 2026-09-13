$(function(){

    // Slide Up and Down
    javascript
    $('.slideUp').click(function () {

        let faq = $(this).closest('.relative');

        faq.find('.textSlide').slideUp(1000);

        $(this).addClass('hidden');

        faq.find('.slideDown').removeClass('hidden');

    });


    $('.slideDown').click(function () {

        let faq = $(this).closest('.relative');

        faq.find('.textSlide').slideDown(1000);

        $(this).addClass('hidden');

        faq.find('.slideUp').removeClass('hidden');

    });

    //------------back to top
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1500);
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
    });

    //-----------banner slide
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',

        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    //-----------counterUp
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });

    //-----------feedback slide
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,

        prevArrow: $('.prev-1'),
        nextArrow: $('.next-1'),

        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    

    //-----------WOW js
    new WOW().init();

    //-----------About slide
    $('.tools-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 2000,

        arrows: false,
        dots: false,

        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6
                }
            }
        ]
    });

});

// ---------------ContactForm
document.addEventListener('DOMContentLoaded', () => {
    let ConName = document.getElementById('contact_name');
    let NameError = document.getElementById('name_error');
    let ConEmail = document.getElementById('contact_email');
    let EmailError = document.getElementById('email_error');
    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    let ConMessage = document.getElementById('contact_message');
    let MessageError = document.getElementById('message_error');
    let ConNumber = document.getElementById('contact_number');
    let NumberError = document.getElementById('number_error');
    let CheckError = document.getElementById('check_error');
    let CheckFix = document.getElementById('check_fix');
    
    // Only set up contact form if elements exist
    if (ConName && ConEmail && ConMessage) {
        let hadError = false; // Track if there was an error

        window.sub = function() {
            // Reset status messages
            if (CheckError) CheckError.style.display = 'none';
            if (CheckFix) CheckFix.style.display = 'none';
            
            let hasError = false;

            if (ConName.value == '') {
                if (NameError) NameError.innerHTML = 'Please fill out this field.';
                hasError = true;
                ConName.focus();
            }
            
            if (ConEmail.value == '') {
                if (EmailError) EmailError.innerHTML = 'Please fill out this field.';
                hasError = true;
                if (!ConName.value == '') ConEmail.focus();
            } else if (!regex.test(ConEmail.value)) {
                if (EmailError) EmailError.innerHTML = 'Please enter a valid email address.';
                hasError = true;
                if (!ConName.value == '') ConEmail.focus();
            }

            if (ConNumber.value == '') {
                if (NumberError) NumberError.innerHTML = 'Please fill out this field.';
                hasError = true;
                ConName.focus();
            }
            
            if (ConMessage.value == '') {
                if (MessageError) MessageError.innerHTML = 'Please fill out this field.';
                hasError = true;
                if (!ConName.value == '' && !ConEmail.value == '') ConMessage.focus();
            }

            if (hasError) {
                hadError = true; // Set flag when there's an error
                if (CheckError) {
                    CheckError.innerHTML = 'One or more fields have an error. Please check and try again.';
                    CheckError.style.display = 'block';
                }
                return false;
            }
            return true;
        }

        function errvalid() {
            if (ConName.value != '' && NameError) {
                NameError.innerHTML = '';
            }
            if (ConEmail.value != '' && EmailError) {
                EmailError.innerHTML = '';
            }
            if (ConNumber.value != '' && NumberError) {
                NumberError.innerHTML = '';
            }
            if (ConMessage.value != '' && MessageError) {
                MessageError.innerHTML = '';
            }
            if (regex.test(ConEmail.value) && EmailError) {
                EmailError.innerHTML = '';
            }
            
            // Check if all conditions are met AND there was a previous error
            if (ConName.value != '' && ConEmail.value != '' && ConMessage.value != '' && regex.test(ConEmail.value)) {
                if (CheckError) CheckError.style.display = 'none';
                if (hadError && CheckFix) { // Only show success message if there was a previous error
                    CheckFix.innerHTML = 'All condition is complete.';
                    CheckFix.style.display = 'block';
                }
            }
        }

        ConName.addEventListener('blur', errvalid);
        ConEmail.addEventListener('blur', errvalid);
        ConMessage.addEventListener('blur', errvalid);
    }
});
