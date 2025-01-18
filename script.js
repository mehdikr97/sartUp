
var tl = gsap.timeline()
tl.from(".logo",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.8,
    stagger:0.5
})
tl.from("h4",{
    y:-30,
    opacity:0,
    delay:0.2,
    stagger:0.4
})

gsap.fromTo(
    ".stripe",
    {
      width: "0%",
      opacity: 0,
    },
    {
      width: "100%",
      opacity: 1,
      duration: 1.8,
      delay: 0.5,
      ease: "power2.inOut",
    }
  );

TweenMax.from(".coke", 1, {
    delay: 1.4,
    opacity: 0,
    y: -1000,
    ease: Circ.easeInOut
})
TweenMax.from(".headr", 2, {
    delay: 1.8,
    x: -700,
    ease: Circ.easeInOut
})

TweenMax.from(".text h2", 1, {
    delay: 3.3,
    opacity: 0,
    y: 40,
    ease: Circ.easeInOut
})
TweenMax.from(".text .para", 1.2, {
    delay: 3.9,
    opacity: 0,
    y: 40,
    ease: Circ.easeInOut
})
