(function() {
  const features = document.querySelector('.agrochain-features');
  const slides = [
      {
          title: 'Manage Your Inventory Better',
          heading: 'Live Stocks with Powerful Reporting',
          description: 'agrochain allows you to track your own and your customer\'s stocks on your sites and your own stocks on other\'s sites if you are managing stocks for other users. With extensive reporting capabilities built-in, users are empowered with daily and weekly update emails as well as the ability to download reports for different filters and views of the stock data.',
          image: 'https://agrichain.com/wp-content/uploads/2025/01/image-14-768x403.webp'
      },
      {
          title: 'Streamline Your Procurement',
          heading: 'Automated Procurement Solutions',
          description: 'Transform your procurement process with end-to-end automation. From purchase orders to payments, our system streamlines every step, reducing manual work and increasing efficiency.',
          image: 'https://agrichain.com/wp-content/uploads/2025/01/image-15-768x403.webp'
      },
      {
          title: 'Efficient Site Operations',
          heading: 'Comprehensive Site Management',
          description: 'Take control of your sites with our powerful management tools. Monitor operations, manage resources, and optimize performance across all your locations from a single dashboard.',
          image: 'https://agrichain.com/wp-content/uploads/2025/01/image-removebg-preview-2.webp'
      },
      {
          title: 'Seamless Logistics',
          heading: 'Integrated Logistics Management',
          description: 'Our integrated logistics suite provides end-to-end visibility and control over your supply chain. Track shipments, manage carriers, and optimize routes in real-time.',
          image: 'https://agrichain.com/wp-content/uploads/2025/01/image-removebg-preview-3.webp'
      },
      {
          title: 'Container Tracking',
          heading: 'Complete Container Visibility',
          description: 'Monitor your containers from farm to ship with real-time tracking and status updates. Ensure smooth operations and maintain complete visibility throughout the journey.',
          image: 'https://agrichain.com/wp-content/uploads/2025/01/container-packing-screen-768x403.webp'
      }
  ];

  const slider = features.querySelector('.slider');
  const dotsContainer = features.querySelector('.dots');
  const buttons = features.querySelectorAll('.feature-button');
  let currentSlide = 0;
  let slideInterval;

  // Create slides
  slides.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.innerHTML = `
          <div class="slide-content">
              <div class="slide-title">${slide.title}</div>
              <h2 class="slide-heading">${slide.heading}</h2>
              <p class="slide-description">${slide.description}</p>
              <a href="#" class="explore-btn">Explore More</a>
          </div>
          <div class="slide-image">
              <img src="${slide.image}" alt="${slide.title}">
          </div>
      `;
      slider.appendChild(slideElement);

      const dot = document.createElement('div');
      dot.className = 'dot' + (index === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
      currentSlide = index;
      updateSlider();
  }

  function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      features.querySelectorAll('.dot').forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
      });

      buttons.forEach((button, index) => {
          button.classList.toggle('active', index === currentSlide);
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
  }

  buttons.forEach((button, index) => {
      button.addEventListener('click', () => goToSlide(index));
  });

  slideInterval = setInterval(nextSlide, 2000);

  slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  slider.addEventListener('mouseleave', () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 2000);
  });
})();

//navbar js
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = menuToggle.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
  spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
});