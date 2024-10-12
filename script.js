// difference between from and to
// if initial to final then use gsap.to
// if  final to initial then use gsap.from

gsap.to(
  // element needed to be animated
  "#box",
  //   animation options
  {
    x: 565,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "red",
    borderRadius: "50%",
    scale: "0.5",
    // yoyo: true,
    // repeat: -1,
  }
);

gsap.from(
  // element needed to be animated
  "#box2",
  //   animation options
  {
    x: 565,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "seagreen",
    borderRadius: "50%",
    scale: "0.5",
    // yoyo: true,
    // repeat: -1,
  }
);

gsap.from("#hello h1", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.5,
});

gsap.from("#box3", {
  x: 560,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 1,
});

var tl = gsap.timeline();
tl.to("#box4", {
  x: 560,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
});
tl.to("#box5", {
  x: 560,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
});
tl.to("#box6", {
  x: 560,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
});

var navTl = gsap.timeline();

navTl.from("#nav h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  stagger: 0.5,
});
navTl.from("#nav a", {
  opacity: 0,
  duration: 1,
  y: 30,
  stagger: 0.5,
});

// --------------------------------------------------------
// _______________________Web_1____________________________
// ____________________Scroll_Trigger______________________
// --------------------------------------------------------
gsap.from("#page1 #box_1", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#page3 h1", {
  opacity: 0,
  x: 500,
  delay: 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    // markers: true,
    start: "top 60%",
  },
});

gsap.from("#page3 h2", {
  opacity: 0,
  x: -500,
  delay: 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.from("#page3 #box_3", {
  scale: 0,
  opacity: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box_3",
    scroller: "body",
    scrub: true,
    pin: true,
  },
});

gsap.to("#new_page2 #new_p", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#new_page2 #new_p",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "bottom 0%",
    scrub: 3,
    pin: true,
  },
});

gsap.to("#new_page2 #opp_p", {
  transform: "translateX(150%)",
  scrollTrigger: {
    trigger: "#new_page2 #opp_p",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -500%",
    scrub: 3,
    pin: true,
  },
});
