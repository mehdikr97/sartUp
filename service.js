$(document).ready(function () {

  const services = [
      {
          title: "Développement Web",
          description: "Création de sites vitrines et e-commerce.",
         
          image: "ino.jpg"
      },
      {
          title: "Développement Mobile",
          description: "Applications iOS et Android sur mesure.",
        
          image: "ino.jpg"
      },
      {
          title: "Solutions Cloud",
          description: "Hébergement sécurisé et évolutif.",
         
          image: "ino.jpg"
      },
      {
          title: "Consulting IT",
          description: "Stratégies digitales et audits informatiques.",
        
          image: "ino.jpg"
      }
  ];


  const serviceCards = services.map(service => `
      <div class="col-md-3 mb-4">
          <div class="service-card">
              <img src="${service.image}" alt="${service.title}" class="card-img-top">
              <div class="card-body">
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
                  <button class="btn btn-primary">En savoir plus</button>
              </div>
              
          </div>
      </div>
  `).join('');

  $('#service-cards').html(serviceCards);

  const pricing = [
      {
          title: "Développement Web",
          price: "60000DH",
          features: ["Site vitrine", "Site e-commerce", "Optimisation SEO"]
      },
      {
          title: "Développement Mobile",
          price: "50000DH",
          features: ["Applications iOS", "Applications Android", "Maintenance incluse"]
      },
      {
          title: "Solutions Cloud",
          price: "10000DH",
          features: ["Hébergement sécurisé", "Solutions évolutives", "Support 24/7"]
      },
      {
          title: "Consulting IT",
          price: "900000DH",
          features: ["Audit informatique", "Stratégie digitale", "Formation"]
      }
  ];

 
  const priceCards = pricing.map(plan => `
      <div class="col-md-3 mb-4">
          <div class="price-card">
              <h3>${plan.title}</h3>
              <div class="price-highlight">
                  <span class="price-value">${plan.price}</span>
                  <span class="price-label">/ projet</span>
              </div>
              <ul>
                  ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
              <button class="btn btn-primary choose-plan">Choisir ce plan</button>

              <!-- Formulaire caché -->
              <div class="plan-form" style="display: none;">
                  <form>
                      <div class="mb-3">
                          <label for="name" class="form-label">Nom complet</label>
                          <input type="text" class="form-control" id="name" required>
                      </div>
                      <div class="mb-3">
                          <label for="email" class="form-label">Adresse e-mail</label>
                          <input type="email" class="form-control" id="email" required>
                      </div>
                      <div class="mb-3">
                          <label for="phone" class="form-label">Téléphone</label>
                          <input type="tel" class="form-control" id="phone" required>
                      </div>
                      <button type="submit" class="btn btn-success">Soumettre</button>
                      <button type="button" class="btn btn-secondary cancel-form">Annuler</button>
                  </form>
              </div>
          </div>
      </div>
  `).join('');

  $('#price-cards').html(priceCards);

 
  $(".choose-plan").click(function () {
      $(this).hide(); 
      $(this).siblings(".plan-form").slideDown(); 
  });

 
  $(".cancel-form").click(function () {
      $(this).closest(".plan-form").slideUp(); 
      $(this).closest(".price-card").find(".choose-plan").show(); 
  });


  $(".plan-form form").submit(function (e) {
      e.preventDefault(); 
      alert("Formulaire soumis avec succès !");
      
  });

  
  gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none none"
      }
  });

  gsap.from(".price-card", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 80%",
          toggleActions: "play none none none"
      }
  });


  gsap.from("#leo", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5
  });

  gsap.from("#footer", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
          trigger: "#footer",
          start: "top 80%",
          toggleActions: "play none none none"
      }
  });
});