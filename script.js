const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// animations
function PageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2, // animation delay one by one
    })
    .from(".bottom-box", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

PageAnim();

//chapta
let timeout;

function skewStyle() {
  // default values
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    let xdiff = dets.clientX - xprev;
    let ydiff = dets.clientY - xprev;

    // clamp
    xscale = gsap.utils.clamp(0.8, 1.1, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.1, ydiff);

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);

    // console.log(xdiff, ydiff);

    xprev = dets.clientX;
    yprev = dets.clientY;
  });
}

// gsap animations
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

skewStyle();
circleMouseFollower();
