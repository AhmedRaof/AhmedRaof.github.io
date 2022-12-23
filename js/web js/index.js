// Animation
$(window).scroll(function () {
    var an1 = $(".animation1").offset().top - window.innerHeight;
    if ($(window).scrollTop() > an1) {
        $(".fade_in_right1").addClass("animate__animated animate__fadeInRight");
        $(".fade_in_left1").addClass("animate__animated animate__fadeInLeft");
        $(".fade_in1").addClass("animate__animated animate__fadeIn");

    }
});

$(window).scroll(function() {
    var an2 = $(".animation2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > an2) {
        $(".fade_in_right2").addClass("animate__animated animate__fadeInRight");
        $(".fade_in_left2").addClass("animate__animated animate__fadeInLeft");
        $(".fade_in2").addClass("animate__animated animate__fadeIn");
    }
});

$(window).scroll(function() {
    var an3 = $(".animation3").offset().top - window.innerHeight;
    if ($(window).scrollTop() > an3) {
        $(".fade_in_right3").addClass("animate__animated animate__fadeInRight");
        $(".fade_in_left3").addClass("animate__animated animate__fadeInLeft");
        $(".fade_in3").addClass("animate__animated animate__fadeIn");
    }
});

$(window).scroll(function() {
    var an4 = $(".animation4").offset().top - window.innerHeight;
    if ($(window).scrollTop() > an4) {
        $(".fade_in_right4").addClass("animate__animated animate__fadeInRight");
        $(".fade_in_left4").addClass("animate__animated animate__fadeInLeft");
        $(".fade_in4").addClass("animate__animated animate__fadeIn");
    }
});