const postCardArr = [
    {
     id: "1",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.COIvX3HRYQpJd6JUM01FRQHaEK%26pid%3DApi&f=1&ipt=3ba436288f295aaa871bdc53ec76acb714b87f5bde7b254e6377223383fc2d16&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qQDgUP_imfPJZfqlrT_taAHaHa%26pid%3DApi&f=1&ipt=32bf7b05e8387d0b30aa9ff32ea7ae84e873d90175ed95b20c339b1b9964b906&ipo=images",
     bio_name: "Smith Root",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '83',
     post_title: "Master the Art of Efficient Problem Solving Today",
     tags: ["Tech", "AI"]
    },
    {
     id: "2",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Wzisv_wLEWhzhrCpD1tS2gHaET%26pid%3DApi&f=1&ipt=f81a8c2c737f0554a5c19a8fa59df89a6513b071a79f7b14437e8cbe4ac41d79&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IGNf7GuQaCqz_RPq5wCkPgHaLH%26pid%3DApi&f=1&ipt=81d5b661cf9917ec1d1fad60e40167e7b7fab5475434bee91f20960fcb33fc19&ipo=images",
     bio_name: "Amit Cool",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '53',
     post_title: "Unlock Your Creative Potential with Practical Solutions",
     tags: ["Fitness", "Wellness", "Nutrition"]
    },
    {
     id: "3",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mOufqoDBY-D-f_lLrnOerwHaEN%26pid%3DApi&f=1&ipt=c3b1cae2f5aa8a48f4a0275e171b39b754c12552481c78ada4eb49b2ca0cb503&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.L9B1n8lj7aocldq2QeKEtgHaHa%26pid%3DApi&f=1&ipt=c564d8e05a99f8d11676945fe55dcb1f6b28a40eb4da93c9aff9f17a9f422fee&ipo=images",
     bio_name: "Anita Rose",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '32',
     post_title: "Achieve Success Through Simplified Steps and Strategies",
     tags: ["Art", "Creativity"]
    },
    {
     id: "4",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FogyLRzPV1oRu_TQHyRpcgHaEu%26pid%3DApi&f=1&ipt=a20419766188d3bafec0fa1907b7dac5f7df1231901e813b07eca841369769e7&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xo89Fu2pDKhSHLMLO9-OcAHaHa%26pid%3DApi&f=1&ipt=6db49be81f8106e1dd7680bcbd029b427e3575221b2ce68a5b0faaa0c1268fad&ipo=images",
     bio_name: "Amit Gupta",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '55',
     post_title: "Innovative Approaches to Everyday Challenges Made Simple",
     tags: ["Books", "Knowledge", "Learning"]
    },
    {
     id: "5",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AHDKxzbgdcaNW1mPKXYGowHaEX%26pid%3DApi&f=1&ipt=00339eca1483e55131405a33a47c0930b5363f795a3b22c3beeba9cf6803de6d&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XSZAFm-5JI7nriDLwZqRQQHaE7%26pid%3DApi&f=1&ipt=c3346a940bc594eefbe627221fec3d2fd9861fd8f42052dab4a1fa8d86475e34&ipo=images",
     bio_name: "Sumit Gupta",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '8',
     post_title: "Transform Ideas Into Action with Proven Techniques",
     tags: ["Sports", "Adventure"]
    },
    {
     id: "6",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dRWxV457I7W5EVLfbEzpAgHaDf%26pid%3DApi&f=1&ipt=fa8e491ffe67d3c785d72bf0344f33a076ace22089466628a0d4efb3c46e85ce&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ozD5X0SVxbGAhVmqy27jrAHaE8%26pid%3DApi&f=1&ipt=9b83cbc71b5456d141ac846e0c85dba5f4a3ca8ce8eb2f5b71be16296b384a2f&ipo=images",
     bio_name: "Sumit Gupta",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '5',
     post_title: "Step-by-Step Guide to Mastering Essential Skills",
     tags: ["Fashion", "Style", "Beauty"]
    },
    {
     id: "7",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.h6lj7H-QfzG_F2TyXicHqwHaD4%26pid%3DApi&f=1&ipt=8253b1ca0c0efc115414439ddde40c3ef0c454498c18cf90601bcdc93d42c937&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.E5uj8X0pZsofz7_jRJHT1gHaLH%26pid%3DApi&f=1&ipt=d9c794c22491f7f19519698c8dec67db0feb82d0e41e5dc9e6d9a0f4251cb4d8&ipo=images",
     bio_name: "Priyanka mediawiki",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '12',
     post_title: "Discover Practical Solutions for Complex Real-World Problems",
     tags: ["Photography", "Travel"]
    },
    {
     id: "8",
     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.r3TusN-IQwjWrifnzvnaYwHaEK%26pid%3DApi&f=1&ipt=bf7647ac175b15418041d587c83e4bcab84ea361bd3062f8f5d9c604f5d9a9eb&ipo=images",
     bio_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y8rxnBGTBqw2Qlsncw_y6AHaE7%26pid%3DApi&f=1&ipt=9983911d26603289884f06bfc35311d31a771d9348d33bbc4a9e245fc0e3d313&ipo=images",
     bio_name: "Amil Diels",
     social_link: "https://www.linkedin.com/in/suberiq/",
     comment: '21',
     post_title: "Empowering Ideas to Achieve Excellence in Any Field",
     tags: ["Food", "Travel"]
    },
 ] 
     
 const postCard = (root) => {

    if(!root){
        console.error("Root Element for posts not found!");
        return;
    }
 
    try{
   postCardArr.forEach(post => {
 
     
     const cardDiv = document.createElement("div")
     cardDiv.classList.add("post_card");
   
     // create card img
     const cardImg = document.createElement("img");
    //  cardImg.src = `../assets/images/${post.image}.jpg`
    cardImg.src = post.image

 
     // first row of card
     const firstRowDiv = document.createElement("div");
     firstRowDiv.classList.add("post_first__row");
 
     // bio image
     const bioImg = document.createElement("img");
     bioImg.src = post.bio_img
 
     // bio name
     const bioName = document.createElement("span");
     bioName.classList.add("post_bio__name");
     bioName.innerHTML = post.bio_name;
 
     //post timestamp
     let postTime = new Date();
     let date = postTime.getDate();
     let monthIndex = postTime.getMonth();
     let year = postTime.getFullYear();
 
     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
     const postTimestamp = document.createElement("span");
     postTimestamp.innerHTML = `${date} ${months[monthIndex]} , ${year}`
     
     // social media
     const socialAnchor = document.createElement("a");
     socialAnchor.classList.add("post_social__link");
     socialAnchor.href = post.social_link;
     const socialSpan = document.createElement("span");
     socialSpan.innerHTML = `<i class="fa-brands fa-linkedin"></i>`
     socialAnchor.appendChild(socialSpan);
 
 
     //post comments
     const postCommentSpan = document.createElement("span");
     postCommentSpan.classList.add("post_comments");
     postCommentSpan.innerHTML = `<i class="fa-solid fa-comments"></i>`
     const postCommentsCount = document.createElement("small");
     postCommentsCount.innerHTML = post.comment;
 
     postCommentSpan.appendChild(postCommentsCount);
     
 
     // second row of card for title
 
     const postTitlePara = document.createElement("p");
     postTitlePara.classList.add("post_title");
     postTitlePara.innerHTML = post.post_title;
 
     // third row of card for tags or categories
     const tagDiv = document.createElement("div");
     tagDiv.classList.add("post_tags__wrap");
     // console.log(post.tags.length);
     
     post.tags.forEach((str)=> {
       const tagSpan = document.createElement("span");
       tagSpan.innerHTML = `#${str}`
       tagDiv.appendChild(tagSpan);
     });
 
 
     // correct all element on position
     cardDiv.appendChild(cardImg);
 
     firstRowDiv.appendChild(bioImg);
     firstRowDiv.appendChild(bioName);
     firstRowDiv.appendChild(postTimestamp);
     firstRowDiv.appendChild(socialAnchor);
     firstRowDiv.appendChild(postCommentSpan);
 
     cardDiv.appendChild(firstRowDiv);
     cardDiv.appendChild(postTitlePara);
     cardDiv.appendChild(tagDiv);
 
     // console.log(cardDiv);
     root.appendChild(cardDiv);
     
      
 
     
   })
} catch(error){
    console.error("Error rendering post card",error);
    root.innerHTML = `
       <p class="error_class"> Failed to load Posts. Please try again later </p>
    `
    
}
   
 }




 document.addEventListener("DOMContentLoaded",() => {
    try{
        const postsWrapper = document.getElementById('posts_wrapper');
        
        // console.log(postsWrapper);
        
       if(!postsWrapper){
        throw new Error("Posts wrapper element not found.");
       }
       postCard(postsWrapper);
    }catch(error){
       console.error("Error initializing blog posts:", error);
       
    }
 })

//  👉 selected Categories
document.addEventListener("DOMContentLoaded",() => {
  loadComponent('nav', '../components/navbar.html', attachCategoryAndSearch); // Pass the callback
    
})

// 👉 Carousel 
function attachNavCarousel() {
   const slides = document.querySelectorAll(".nav_slide");
   const slidesContainer = document.querySelector(".nav_slides");
   const prevButton = document.querySelector(".slide_prev");
   const nextButton = document.querySelector(".slide_next");
//  console.log(nextButton);
 
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
 
 }
 
 
 

//👉 nav links toggle

function attachNavMenuListeners() {
   const navMenu = document.querySelector(".nav_link__group"); // Adjust ID as per your navbar structure
   const menuToggle = document.getElementById("menuToggle"); // Button to toggle the menu
   
   
   if (navMenu && menuToggle) {
     // Toggle the menu on button click
     
     menuToggle.addEventListener('click', (e) => {
       e.stopPropagation();
       navMenu.classList.add("active");
       
     });
 
     // Close the menu when clicking outside
     document.addEventListener('click', (e) => {
       if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
         navMenu.classList.remove("active");
       }
     });
   } else {
     console.error("Navigation menu or toggle button not found.");
   }
 
 
 
 }
 

// Function to load a component dynamically
async function loadComponent(id, filePath, callback) {
   const element = document.getElementById(id);
   if (element) {
     try {
       const response = await fetch(filePath);
       if (response.ok) {
         element.innerHTML = await response.text();
         if (typeof callback === 'function') {
           callback(); // Call the callback after the component is loaded
         }
       } else {
         console.error(`Failed to load ${filePath}`);
       }
     } catch (error) {
       console.error(`Error loading ${filePath}:`, error);
     }
   }
 }
 

function attachCategoryAndSearch(){
   const navCategory = document.getElementById("navCategories");
   const searchInput = document.getElementById("searchInput");
   navCategory.addEventListener("change", (e) => {
      // console.log(e.target.value);

      const selectedCategory = e.target.value;
   filterCardsByCategory(selectedCategory);
      
      
   })


      // Add event listener to the search input
 searchInput.addEventListener("input", (e) => {
   const query = e.target.value.trim();
   filterCardsBySearch(query);
 });
 attachNavMenuListeners()
 attachNavCarousel();
}



const latestPostWrap = document.getElementById("latestPostWrap");
const latePostPagination = document.querySelector(".late_posts__pagination");
// console.log(latestPostWrap);

const filterCardsByCategory = (category) => {
  const storedCards = JSON.parse(localStorage.getItem("NewCard")) || [];

  // If no cards exist, provide an error message
  if (!storedCards.length) {
    console.error("No cards are available.");
    return;
  }

  const filteredCards =
    category === "All"
      ? storedCards
      : storedCards.filter((card) => {
          const tagsKey = Object.keys(card).find((key) => key.startsWith("tags_"));
          return card[tagsKey]?.includes(category);
        });

  // If no cards match the category, provide an error message
  if (filteredCards.length === 0) {
    // console.error(`Category "${category}" is not available.`);
    // Optionally, update the UI to display an error message
    latePostPagination.style.display = "none";
    if (latestPostWrap) {
      latestPostWrap.innerHTML = `<p class="cate_error">No posts found for the category '${category}'.</p>`;
    }
    return;
  }
  latePostPagination.style.display = "flex";


  // Render the filtered cards if available
  renderPaginatedCards(filteredCards);

  
};


// 👉 Search Input Posts with (Tags & heading)

 
const filterCardsBySearch = (query) => {
   const storedCards = JSON.parse(localStorage.getItem("NewCard")) || [];
 
   if (!storedCards.length) {
     latestPostWrap.innerHTML = `<p>No cards available.</p>`;
     return;
   }
 
   // Filter cards by heading or tags
   const filteredCards = storedCards.filter((card) => {
      // console.log(card);
      const headingKey = Object.keys(card).find((key) => key.startsWith("heading_"));
      const tagKey = Object.keys(card).find((key) => key.startsWith("tags_"));

      // console.log(card[headingKey]);
      if(!headingKey || !tagKey){
        return;
      }
      
     const headingMatch = card[headingKey].toLowerCase().includes(query.toLowerCase());
     const tagsMatch = card[tagKey].some((tag) =>
       tag.toLowerCase().includes(query.toLowerCase())
     );
     return headingMatch || tagsMatch;
   });
 
   if (filteredCards.length === 0) {
     latestPostWrap.innerHTML = `<p class="query_error">No results found for "${query}".</p>`;
    latePostPagination.style.display = "none";

     return;
   }
   latePostPagination.style.display = "flex";

 
   renderPaginatedCards(filteredCards);
 };
 
 
 //👉  new Card wrapper (Cards)

 const ITEMS_PER_PAGE = 5; // Number of items to display per page
let currentPage = 1; // Current active page
const pagination = document.querySelector(".late_posts__pagination");



// 👉 Nav Categories

const newCardWrap = () => {

   const latestPostWrap = document.getElementById("latestPostWrap");

   // Get the stored cards from localStorage
   const storedCards = JSON.parse(localStorage.getItem("NewCard")) || []; // Default to an empty array if no data is found

   // Check if there are any stored cards
   if (storedCards.length === 0) {
      latestPostWrap.innerHTML = "<p class='card_not__available'>No cards available.</p>";
      pagination.style.display = "none";

   } else {
      // Sort the cards based on the numeric suffix of the `image_*` field
      const sortedCards = storedCards.sort((a, b) => {
         const suffixA = parseInt(Object.keys(a).find(key => key.startsWith("image_")).split("_")[1], 10);
         const suffixB = parseInt(Object.keys(b).find(key => key.startsWith("image_")).split("_")[1], 10);
         return suffixA - suffixB; // Ascending order
      });
     
      // Paginate and render the cards
      renderPaginatedCards(sortedCards);
   }
};


// Function to create a complete card element

const createCardElement = (card) => {
   const cardDiv = document.createElement("div");
   cardDiv.classList.add("card"); // Add a class for styling

   // Dynamically find keys for the card details
   const imageKey = Object.keys(card).find(key => key.startsWith("image_"));
   const headingKey = Object.keys(card).find(key => key.startsWith("heading_"));
   const textKey = Object.keys(card).find(key => key.startsWith("text_"));
   const quoteKey = Object.keys(card).find(key => key.startsWith("quote_"));
   const tagsKey = Object.keys(card).find(key => key.startsWith("tags_"));

   // assign a unique id 
   cardDiv.id = card.id
  //  console.log(card.id);
   

   // Populate card content
   cardDiv.innerHTML = `
      <div class="card-image">
         <img src="${card[imageKey] || 'https://res.cloudinary.com/suberiq/image/upload/v1737222496/tlrb5drgjzhnibuha8mf.png'}" alt="${card[headingKey] || 'Card Image'}">
      </div>
      <div class="card-content">
         <h3 class="card-title">${card[headingKey] || 'No Heading'}</h3>
         <p class="card-text">${card[textKey] || 'No Text Available'}</p>
         <blockquote class="card-quote">${card[quoteKey] || 'No Quote Available'}</blockquote>
         <div class="card-tags">
            <span>Tags:</span>
            <ul>
               ${
                  card[tagsKey]
                     ? card[tagsKey].map(tag => `<li>${tag}</li>`).join('')
                     : '<li>No Tags Available</li>'
               }
            </ul>
         </div>
      </div>
   `;

   // Add click event listener to the cardDiv
   cardDiv.addEventListener("click", () => {
      // Redirect to the blog-details page with the card id
      window.location.href = `blog-details.html?id=${card.id}`;
   })

   return cardDiv;
};

// pagination logic
// Render cards with pagination
const renderPaginatedCards = (cards) => {
   const latestPostWrap = document.getElementById("latestPostWrap");

   // Calculate start and end indices for the current page
   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const endIndex = startIndex + ITEMS_PER_PAGE;

   // Get cards for the current page
   const paginatedCards = cards.slice(startIndex, endIndex);

   // Clear the wrapper before appending new cards
   latestPostWrap.innerHTML = "";

   // Render cards for the current page
   paginatedCards.forEach((card) => {
      const cardElement = createCardElement(card); // Create full card HTML
      latestPostWrap.appendChild(cardElement);
   });

   // Update pagination controls
   updatePaginationControls(cards.length);
};

// Update pagination controls
const updatePaginationControls = (totalItems) => {
   const paginationContainer = document.querySelector(".late_posts__pagination");
   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

   // Clear current pagination controls
   paginationContainer.innerHTML = "";

   // Previous button
   const prevButton = document.createElement("span");
   prevButton.innerHTML = `<i class="fa-solid fa-less-than"></i>`;
   prevButton.classList.add(currentPage === 1 ? "disabled" : "active");
   if (currentPage > 1) {
      prevButton.onclick = () => {
         currentPage--;
         newCardWrap(); // Re-render cards for the updated page
      };
   }
   paginationContainer.appendChild(prevButton);

   // Page numbers
   for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("span");
      pageButton.textContent = i;
      pageButton.classList.add(i === currentPage ? "active" : "inactive");
      pageButton.onclick = () => {
         currentPage = i;
         newCardWrap(); // Re-render cards for the updated page
      };
      paginationContainer.appendChild(pageButton);
   }

   // Next button
   const nextButton = document.createElement("span");
   nextButton.innerHTML = `<i class="fa-solid fa-greater-than"></i>`;
   nextButton.classList.add(currentPage === totalPages ? "disabled" : "active");
   if (currentPage < totalPages) {
      nextButton.onclick = () => {
         currentPage++;
         newCardWrap(); // Re-render cards for the updated page
      };
   }
   paginationContainer.appendChild(nextButton);
};

      
   

// *******************************

// Call newCardWrap to load cards on page load
document.addEventListener("DOMContentLoaded", () => {
   newCardWrap();
});



















// const cardArr = [
//     {
//         id: "dsfj2341",
//         img1_url: "http://painteradsf/image/.com",
//         heading1: "How to Play game",
//         text1: "Yes, play game how lorem Ipsum is playing",
//         quote1: "play game how lorem Ipsum is playing",
//         text2: "Yes, play game how lorem Ipsum is playing",
//         list1: ["How to play game","How to play game"],
//         quote2: "Yes, No Lorem ipsum kaise ho",
//         img2_url: "http://developer/image/.com",
//         list2 : ["dance game kaise ho","dance game kaise ho","Ham kaise accidenttly"],
//         comment: "123",
//         post_author: "Sumit kumar",
//         author_img: "http://developer/image/.com",
//         author_social__link: "www.facebook.com",
//         tags: ["technology","science"]
//     }
// ]
 
 
 
 