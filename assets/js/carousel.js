  const slides = document.querySelectorAll(".nav_slide");
  const slidesContainer = document.querySelector(".nav_slides");
  const prevButton = document.querySelector(".slide_prev");
  const nextButton = document.querySelector(".slide_next");

  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 3000; // 3 seconds
  let autoSlide;

  if (totalSlides > 0) {
    // Function to update the slider position
    function updateSlider(index) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    // Function to go to the next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider(currentIndex);
    }

    // Event listeners for navigation buttons
    nextButton?.addEventListener("click", () => {
      clearInterval(autoSlide);
      nextSlide();
      startAutoSlide();
    });

    prevButton?.addEventListener("click", () => {
      clearInterval(autoSlide);
      prevSlide();
      startAutoSlide();
    });

    // Start automatic sliding
    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, intervalTime);
    }

    // Initialize carousel
    updateSlider(currentIndex);
    startAutoSlide();
  } else {
    console.error("No slides found!");
  }
