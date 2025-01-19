document.addEventListener("DOMContentLoaded", () => {
    // Load admin-specific components
    loadComponent('header', '../../components/admin-header.html');
    // loadComponent('managePosts', '../../components/manage-post.html');
    initAdminFeatures();

});

async function loadComponent(id, filePath) {
    const element = document.getElementById(id);
    // console.log(element);
    
    if (element) {
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                element.innerHTML = await response.text();
            } else {
                console.error(`Failed to load ${filePath}`);
            }
        } catch (error) {
            console.error(`Error loading ${filePath}:`, error);
        }
    }
}


const initAdminFeatures = () => {
    const dashIcon = document.getElementById("dashIcon");
    const dashLinks = document.getElementById("dashLinks");
    const dashClose = document.getElementById("dashClose");
    
    // Helper function to check screen size
    // const isMobileScreen = () => window.innerWidth < 768;
    // const isMobileScreen = () => window.innerWidth <= 768;
    
    // Open the menu
    dashIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        dashLinks.style.display = "flex";
        dashClose.style.display = "block";

    });
    dashClose.addEventListener("click", (e) => {
        console.log("click dashClose");
        dashLinks.style.display = "none";
        dashClose.style.display = "none";

        
    });
    // Close the menu
    
    // dashClose.addEventListener("click", () => {
    //     if (isMobileScreen()) {
    //         dashLinks.style.display = "none";
    //         dashClose.style.display = "none";
    //     } else {
    //         dashLinks.style.display = "flex"; // Keep visible on larger screens
    //     }
    // });
    
    // Handle screen resize
    // window.addEventListener("resize", () => {
    //     if (!isMobileScreen()) {
    //         dashLinks.style.display = "flex"; // Always visible on larger screens
    //         dashClose.style.display = "none"; // Close button hidden on larger screens
    //     } else {
    //         dashLinks.style.display = "none"; // Hidden by default on mobile
    //         dashClose.style.display = "none";
    //     }
    // });
    
    
  // blog Write Div
  const writeBtn = document.getElementById("writeBtn");
  const writeDiv = document.getElementById("writeDiv");
  const writeClose = document.getElementById("writeClose");
//   const dashboardHeading = document.getElementById("dashboardHeading");


  writeBtn.addEventListener("click", () => {
      writeDiv.style.display = "block"; 
      dashLinks.style.display = "none";
      dashIcon.style.display = "none";
      dashClose.style.display = "none";
    //   dashboardHeading.style.display = "none";
    })
    
    writeClose.addEventListener("click", () => {
        writeDiv.style.display = "none";
        dashClose.style.display = "none";
        location.reload()

    })

    
    
    // write Icon 
    const writeElm = document.getElementById("writeElm");
    const writeElmTools = document.getElementById("writeElmTools");
    const writePlusIcon = document.getElementById("writePlusIcon");
    const writeCrossIcon = document.getElementById("writeCrossIcon");

  writeElm.addEventListener("click", () => {
        writeElmTools.style.display = "block";
        writePlusIcon.style.display = "none"
        writeCrossIcon.style.display = "block"
  })

//   console.log(writeCrossIcon);
  
  writeCrossIcon.addEventListener("click", () => {
    if(writeElmTools.style.display == "block"){
    writeElmTools.style.display = "none"
    writePlusIcon.style.display = "block"
    writeCrossIcon.style.display = "none"
    //  writeDiv.style.display = "none"
      

    }

  })


   

  // 👉 write Element tools

   // generate unique id
  const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

  const writeToolsParent = document.getElementById("writeToolsParent");
  const writeInput = document.getElementById("writeInput");
  const cardForm = document.getElementById("cardForm");
  const writeCategories = document.getElementById("writeCategories");
  const tagsSelect = document.getElementById("tags");
  const blogUploadImg = document.getElementById("blogUploadImg");
  const cardFormSubmit = document.getElementById("cardFormSubmit")

  const cardArr = JSON.parse(localStorage.getItem("CardArr")) || [];

  // Event listener for write tools
writeToolsParent.addEventListener("click", (e) => {
    console.log(e.target.className);

   // check cardFormSubmit disabled or not
   if(e.target !== writeToolsParent){
    cardFormSubmit.disabled = false;
   }else{
    cardFormSubmit.disabled = true;
    
   }

     
    if (e.target.className === "writeHeading") {
        // Add a heading
        writeInput.style.display = "block";
        writeInput.placeholder = "Enter Heading...";
        writeInput.addEventListener(
            "change",
            (e) => {
                const h1Tag = document.createElement("h1");
                h1Tag.innerHTML = e.target.value;
                h1Tag.className = "post_card__heading";
                cardForm.appendChild(h1Tag);
                writeInput.style.display = "none";

                // Add to cardArr and store in localStorage
                const newCard = {
                    id: generateUniqueId(),
                    type: "heading",
                    value: e.target.value,
                };
                cardArr.push(newCard);
                localStorage.setItem("CardArr", JSON.stringify(cardArr));
                console.log("New Heading:", newCard);

                // upload banner image display none
                blogUploadImg.style.display = "none";


            },
            { once: true }
        );

        // After click heading close write Element Tools
        writeElmTools.style.display = "none";
        // close writeCrossIcon
        writeCrossIcon.style.display = "none";
        // show writePlusIcon 
        writePlusIcon.style.display = "block";

        // empty writeInput
        writeInput.value = "";


    } else if (e.target.className === "writeText") {
        // Add text
        writeInput.style.display = "block";
        writeInput.placeholder = "Enter Text...";
        writeInput.addEventListener(
            "change",
            (e) => {
                const paragraph = document.createElement("p");
                paragraph.innerHTML = e.target.value;
                paragraph.className = "post_card__text";
                cardForm.appendChild(paragraph);
                writeInput.style.display = "none";

                // Add to cardArr and store in localStorage
                const newCard = {
                    id: generateUniqueId(),
                    type: "text",
                    value: e.target.value,
                };
                cardArr.push(newCard);
                localStorage.setItem("CardArr", JSON.stringify(cardArr));
                console.log("New Text:", newCard);
         
                // upload banner image display none
                blogUploadImg.style.display = "none";

            },
            { once: true }
        );
        
        writeElmTools.style.display = "none";
         // close writeCrossIcon
         writeCrossIcon.style.display = "none";
         // show writePlusIcon 
         writePlusIcon.style.display = "block";
 
         // empty writeInput
        writeInput.value = "";


    } else if (e.target.className === "writeList") {
        // Add a list
        writeInput.style.display = "block";
        writeInput.placeholder = "Enter List Items (comma-separated)...";
        writeInput.addEventListener(
            "change",
            (e) => {
                // const listItems = e.target.value.split(",");
                const listItems = e.target.value.split(",").map(item => item.trim()).filter(item => item !== "");



                  // Validation: Ensure input is comma-separated
            if (listItems.length <= 1) {
                alert("Please enter a valid comma-separated list.");
                writeInput.value = ""; // Clear the invalid input
                writeInput.style.display = "none";
                return;
            }

                const ul = document.createElement("ul");
                listItems.forEach((item) => {
                    const li = document.createElement("li");
                    li.style.listStyleType = "decimal"
                    li.innerHTML = item.trim();
                    ul.appendChild(li);
                });
                ul.className = "post_card__list";
                cardForm.appendChild(ul);
                writeInput.style.display = "none";

                // Add to cardArr and store in localStorage
                const newCard = {
                    id: generateUniqueId(),
                    type: "list",
                    value: listItems,
                };
                cardArr.push(newCard);
                localStorage.setItem("CardArr", JSON.stringify(cardArr));
                console.log("New List:", newCard);


                // upload banner image display none
                blogUploadImg.style.display = "none";
            },
            { once: true }
        );


        writeElmTools.style.display = "none";
          // close writeCrossIcon
          writeCrossIcon.style.display = "none";
          // show writePlusIcon 
          writePlusIcon.style.display = "block";
  
          // empty writeInput
         writeInput.value = "";

    } else if (e.target.className === "writeImg") {
        // Add an image
        writeInput.style.display = "block";
        writeInput.placeholder = "Enter Image URL...";
        writeInput.addEventListener(
            "change",
            (e) => {
                const img = document.createElement("img");
                img.src = e.target.value;
                img.alt = "Uploaded Image";
                img.className = "post_card__img";
                cardForm.appendChild(img);
                writeInput.style.display = "none";

                // Add to cardArr and store in localStorage
                const newCard = {
                    id: generateUniqueId(),
                    type: "image",
                    value: e.target.value,
                };
                cardArr.push(newCard);
                localStorage.setItem("CardArr", JSON.stringify(cardArr));
                console.log("New Image:", newCard);

                // upload banner image display none
                blogUploadImg.style.display = "none";
            },
            { once: true }
        );
        writeElmTools.style.display = "none";
          // close writeCrossIcon
          writeCrossIcon.style.display = "none";
          // show writePlusIcon 
          writePlusIcon.style.display = "block";
  
          // empty writeInput
         writeInput.value = "";

    } else if (e.target.className === "writeQuote") {
        // Add a quote
        writeInput.style.display = "block";
        writeInput.placeholder = "Enter Quote...";
        writeInput.addEventListener(
            "change",
            (e) => {
                const blockquote = document.createElement("blockquote");
                blockquote.innerHTML = e.target.value;
                blockquote.className = "post_card__quote";
                cardForm.appendChild(blockquote);
                writeInput.style.display = "none";

                // Add to cardArr and store in localStorage
                const newCard = {
                    id: generateUniqueId(),
                    type: "quote",
                    value: e.target.value,
                };
                cardArr.push(newCard);
                localStorage.setItem("CardArr", JSON.stringify(cardArr));
                console.log("New Quote:", newCard);


                // upload banner image display none
                blogUploadImg.style.display = "none";
            },
            { once: true }
        );
        writeElmTools.style.display = "none";
          // close writeCrossIcon
          writeCrossIcon.style.display = "none";
          // show writePlusIcon 
          writePlusIcon.style.display = "block";
  
          // empty writeInput
         writeInput.value = "";

    }else if(e.target.className === "writeTags"){
        writeCategories.style.display = "block";
        writeElmTools.style.display = "none";
          // close writeCrossIcon
          writeCrossIcon.style.display = "none";
          // show writePlusIcon 
          writePlusIcon.style.display = "block";
         
                // upload banner image display none
                blogUploadImg.style.display = "none";
          // empty writeInput
         writeInput.value = "";
    } else {
        console.log("No matching tool selected.");
    }
});


//   tags select 
tagsSelect.addEventListener("change", (e) => {
    const selectedTags = e.target.value;

    // Create a new card for tags and add it to cardArr
    const newCard = {
        id: generateUniqueId(),
        type: "tags",
        tags: [selectedTags],
    };

    cardArr.push(newCard);
    localStorage.setItem("CardArr", JSON.stringify(cardArr));

    console.log("Selected Tag:", newCard);

    // Optionally display the selected tag in the form
    const tagDiv = document.createElement("div");
    tagDiv.className = "post_card__tags";
    const tagSpan = document.createElement("span");
    tagSpan.className = "post_card__tag";
    tagSpan.innerHTML = `#${selectedTags}`;
    tagDiv.appendChild(tagSpan);
    cardForm.appendChild(tagDiv);

    // Hide the categories dropdown after selection
    writeCategories.style.display = "none";
});   


 

//👉 Card Form Submit
const newCard = JSON.parse(localStorage.getItem("NewCard")) || []; // Retrieve existing cards from localStorage or initialize as an empty array

cardForm.addEventListener("submit", (e) => {
    e.preventDefault();

       // Add default tag if no tags are selected
       const hasTags = cardArr.some((elm) => elm.type === "tags");
       if (!hasTags) {
           const defaultTag = {
               id: generateUniqueId(),
               type: "tags",
               tags: ["miscellaneous"], // Default tag
           };
           cardArr.push(defaultTag);
           console.log("Default Tag Added:", defaultTag);
       }
   

    // Save the current cardArr to localStorage
    localStorage.setItem("CardArr", JSON.stringify(cardArr));

    // Create a new object for the card
    let newObj = {
        id: generateUniqueId(),
    };

    cardArr.forEach((elm) => {
        switch (elm.type) {
            case "heading":
            case "text":
            case "image":
            case "list":
            case "quote":
                newObj[`${elm.type}_${new Date().getTime()}`] = elm.value;
                break;
            case "tags":
                newObj[`${elm.type}_${new Date().getTime()}`] = elm.tags;
                break;
            default:
                console.log("Element type not recognized: ", elm.type);
                break;
        }
    });

    // Push the new object into the newCard array
    newCard.push(newObj);

    // Save the updated newCard array to localStorage
    localStorage.setItem("NewCard", JSON.stringify(newCard));
    console.log("NewCard updated: ", newCard);

    // Remove CardArr from localStorage
    localStorage.removeItem("CardArr")

    // Reset the form and hide the writeDiv and dashClose
    cardForm.reset();
    writeDiv.style.display = "none";
    dashClose.style.display = "none";

    location.reload()
    

});


// 👉 manage blogs 
const managePostBtn = document.getElementById("managePostBtn");
const managePosts = document.getElementById("managePosts");
const managePostClose = document.getElementById("managePostClose");
// const postEdit = document.getElementById("postEdit");
// const postDelete = document.getElementById("postDelete");
const managePostWrap = document.querySelector(".manage_post__wrap");


// console.log(managePosts);
// console.log(managePostBtn);

managePostBtn.addEventListener("click", (e) =>{
  e.stopPropagation();
  managePosts.style.display = "block";
  dashLinks.style.display = "none";
  dashClose.style.display = "none";

})
// console.log(managePostClose);


managePostClose.addEventListener("click", (e) =>{
    e.stopPropagation();
    managePosts.style.display = "none";
})


// Retrieve posts from local Storage
const storedPosts = JSON.parse(localStorage.getItem("NewCard")) || [];

//render post function dynamically
const renderPosts = () => {
    managePostWrap.innerHTML = ""; // clear existing posts

    if(storedPosts.length === 0){
        managePostWrap.innerHTML = `</p class="manage_post__error"> No posts available.</p>`;
        return;
    }

    //create(show) a card for each post
    storedPosts.forEach((post,index) => {
        // console.log(post)
        // console.log(index);
        
        const postCard = document.createElement("div");
        postCard.classList.add("manage_post__card");

        const imageKey = Object.keys(post).find((key) => key.startsWith("image_"));
        const headingKey = Object.keys(post).find((key) => key.startsWith("heading_"));
        const tagsKey = Object.keys(post).find((key) => key.startsWith("tags_"));

        postCard.innerHTML = `
                <div class="manage_post_img">
                    <img src="${post[imageKey] || 'https://res.cloudinary.com/suberiq/image/upload/v1737222496/tlrb5drgjzhnibuha8mf.png'}" alt="${post[headingKey] || "Post Image"}">
                </div>
                <div class="manage_post__heading">
                    <h3>${post[headingKey] || "No Heading"}</h3>
                </div>
                <div class="manage_post__tag">
                    <small>${post[tagsKey] ? "#" + post[tagsKey].join(", #") : "#miscellaneous"}</small>
                </div>
                <div>
                    <span class="manage_post__edit" id="postEdit-${index}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </span>
                    <span class="manage_post__delete" id="postDelete-${index}">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </div>
            `;
        
        // Add event listener for edit button
        postCard.querySelector(`#postEdit-${index}`).addEventListener("click",() => {
            editPost(index);
        })

        // Add event listener for delete button
        postCard.querySelector(`#postDelete-${index}`).addEventListener("click", () => {
            deletePost(index);
        });

        managePostWrap.appendChild(postCard);

        
        
    })
}

// Edit post func
const editPost = (index) => {
    const post = storedPosts[index];

    // Redirect to an edit page with the post id
    window.location.href = `edit-post.html?id=${post.id}`;
}

// delete post func
const deletePost = (index) => {
    if(confirm("Are you sure you want to delete this post?")){
        storedPosts.splice(index, 1)  // Remove the post from the array
        localStorage.setItem("NewCard",JSON.stringify(storedPosts)); // update localstore

        renderPosts(); // Re-render posts
    }
}

// Initialrendering of posts
renderPosts();


}


// http://127.0.0.1:5500/04_Javascript/Project/practice/pages/index.html


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



 // blog image upload 
//  const blogUploadImg = document.getElementById("blogUploadImg")
//  blogUploadImg.addEventListener("click" , () => {
//      writeInput.style.display = "block";
//      writeInput.placeholder = "Enter Blog upload URL...";
     
//      writeInput.addEventListener("change", (e) => {
//         const uploadImg = document.createElement("img");
//         uploadImg.src = e.target.value;
        
//         cardForm.appendChild(uploadImg);
//         writeInput.style.display = "none"
//         blogUploadImg.style.display = "none"
//         writeInput.value = "";
//      })

//     //  writeElmTools.style.display = "none";
//     //  // close writeCrossIcon
//     //  writeCrossIcon.style.display = "none";
//     //  // show writePlusIcon 
//     //  writePlusIcon.style.display = "block";

//      // empty writeInput
   
//  })   