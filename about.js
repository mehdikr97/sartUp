
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
const images = document.querySelectorAll('.image img');

// GSAP Animation
function animateImages() {
    gsap.fromTo(images, 
        { opacity: 0 }, 
        { 
            opacity: 1, 
            duration: 1, 
            stagger: 0.5, 
            onComplete: () => {
                gsap.to(images, {
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.5,
                    onComplete: animateImages // Loop the animation
                });
            }
        });
}
animateImages();
 
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".content .h1 h1", {
      scrollTrigger: {
        trigger: ".content",
        start: "top 80%", 
        end: "top 50%", 
        scrub: 1, 
      },
      y: 100,
      opacity: 0, 
      duration: 1.2, 
      ease: "power3.out", 
      stagger: 0.2, 
    });

    // Animation pour le paragraphe
    gsap.from(".content p", {
      scrollTrigger: {
        trigger: ".content",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
      x: -100, 
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // Animation pour le bouton et les liens sociaux
    gsap.from(".content a, .content .social ul li", {
      scrollTrigger: {
        trigger: ".content",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
      scale: 0.8, 
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)", 
      stagger: 0.3, 
    });
  });
  const cards = document.querySelectorAll('.card');
  let currentIndex = 0;

  function showNextCard() {
      gsap.to(cards[currentIndex], { opacity: 0, y: 20, duration: 0.05});
      currentIndex = (currentIndex + 1) % cards.length;
      gsap.to(cards[currentIndex], { opacity: 1, y: 0, duration: 0.05 });
  }

  setInterval(showNextCard, 3000);
  showNextCard();
  tl.from("#fa",{
    y:-30,
    opacity:0,
    delay:0.2,
    stagger:0.4
})

$(document).ready(() => {
  var typed = new Typed(".dd", { 
    strings: ["developement site web", "desing ui/ux", "anlatique data", "mobile developpemnt"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});