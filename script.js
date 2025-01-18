// Créer une timeline principale
const mainTimeline = gsap.timeline();

// Animation de la page de chargement
mainTimeline.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 2.5,
    delay: 1.5,
    onComplete: () => {
      document.querySelector(".loading-page").style.display = "none"; // Masquer l'élément après l'animation
    },
  }
);

// Animation du logo
mainTimeline.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
  },
  "-=2" // Démarre légèrement avant la fin de l'animation précédente
);

// Animation de la barre stripe
mainTimeline.fromTo(
  ".stripe",
  {
    width: "0%",
    opacity: 0,
  },
  {
    width: "100%",
    opacity: 1,
    duration: 1.8,
    ease: "power2.inOut",
  },
  "-=1.5" // Superpose cette animation avec celle du logo
);

// Animation des éléments individuels
mainTimeline
  .from(".logo", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  })
  .from("h4", {
    y: -30,
    opacity: 0,
    stagger: 0.4,
  }, "-=0.5") // Superpose légèrement
  .from(".coke", 1, {
    delay: 0.4,
    opacity: 0,
    y: -1000,
    ease: "circ.inOut",
  })
  .from(".headr", 2, {
    x: -700,
    ease: "circ.inOut",
  })
  .from(".text h2", 1, {
    opacity: 0,
    y: 40,
    ease: "circ.inOut",
  })
  .from(".text .para", 1.2, {
    opacity: 0,
    y: 40,
    ease: "circ.inOut",
  });

// Animation des images en boucle
const images = document.querySelectorAll(".image img");
function animateImages() {
  gsap.fromTo(
    images,
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
          onComplete: animateImages, // Boucler l'animation
        });
      },
    }
  );
}
animateImages();
