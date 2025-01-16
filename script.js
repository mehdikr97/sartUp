
var tl = gsap.timeline()
tl.from("h1",{
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
