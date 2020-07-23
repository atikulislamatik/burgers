TweenMax.to(".first", 1.5, {
    delay: .5,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
    delay: .7,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".third", 1.5, {
    delay: .9,
    top: "-100%",
    ease: Expo.easeInOut
});


var t1 = new TimelineMax({ paused: true });

t1.to(".one", 0.5, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});
t1.to(".two", 0.5, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
});

t1.to(".menu", 1, {
    right: "0%",
    ease: Expo.easeInOut,
    delay: -2
});

t1.staggerFrom(".menu ul li a", 1, { x: -200, opacity: 0, ease: Expo.easeOut }, 0.2);

t1.reverse();
$(document).on("click", ".toggle-btn", function () {
    t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function () {
    t1.reversed(!t1.reversed());
});


// 


$(document).mousemove(function (event) {

    $(".menu ul li a").each(function (index, element) {

        var xPos = (event.clientX / $(window).width()) - 0.5,
            yPos = (event.clientY / $(window).height()) - 0.5,
            box = element;

        TweenMax.to(box, 1, {
            rotationY: xPos * 100,
            rotationX: yPos * 100,
            ease: Power1.easeOut,
        });

    })
});

var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
$("a").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});