
document.addEventListener('DOMContentLoaded',() => {

// 👉 Edit post 

// Retrive Id from the url
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
console.log(postId);


// Fetch posts from localStorage
let posts = JSON.parse(localStorage.getItem('NewCard')) || [];

// Get Referenc from edit modal 
const editForm = document.getElementById("editForm");
const editModal = document.getElementById("editModal");
const editHeading = document.getElementById("editHeading");
const editImage = document.getElementById("editImage");
const editText = document.getElementById("editText");
const editList = document.getElementById("editList");
const editQuote = document.getElementById("editQuote");
const editTags = document.getElementById("editTags");


console.log(editQuote.value);

// function to populate the form with data
const populateForm = () => {
    // Find the post by Id
    const post = posts.find((p) => p.id === postId)



    if(post){
       // dynamically get keys for each type of data
       const headingKey = Object.keys(post).find((key) => key.startsWith("heading_"));
       const imageKey = Object.keys(post).find((key) => key.startsWith("image_"));
       const textKey = Object.keys(post).find((key) => key.startsWith("text_"));
       const quoteKey = Object.keys(post).find((key) => key.startsWith("quote_"));
       const listKey = Object.keys(post).find((key) => key.startsWith("list_"));
       const tagsKey = Object.keys(post).find((key) => key.startsWith("tags_"));
      console.log(quoteKey);
      console.log(listKey);
      console.log(tagsKey);
      
       // populate the form fields with the post data
       editHeading.value = post[headingKey] || "";
       editImage.value = post[imageKey] || "";
       editText.value = post[textKey] || "";
       editQuote.value = post[quoteKey] || "";
       editList.value = (post[listKey] || []).join(", ");
       editTags.value = (post[listKey] || []).join(", ");
       console.log(editTags);
       

    }else{
        alert("Post not Found!");
    }
}

populateForm();


// Save changes back to localStorage
editForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Find the post being edited
    const postIndex = posts.findIndex((p) => p.id === postId);
  
    if (postIndex !== -1) {
      // Dynamically get the keys for each type of data
      const headingKey = Object.keys(posts[postIndex]).find((key) => key.startsWith("heading_"));
      const imageKey = Object.keys(posts[postIndex]).find((key) => key.startsWith("image_"));
      const textKey = Object.keys(posts[postIndex]).find((key) => key.startsWith("text_"));
      const quoteKey = Object.keys(posts[postIndex]).find((key) => key.startsWith("quote_"));
      const listKey = Object.keys(posts[postIndex]).find((key) => key.startsWith("list_"));
      const tagsKey = Object.keys(posts[postIndex]).find((key) => key.startsWith("tags_"));
      console.log(editQuote.value);
      console.log(editTags);
      
      // Update the post data
      if (headingKey) posts[postIndex][headingKey] = editHeading.value;
      if (imageKey) posts[postIndex][imageKey] = editImage.value;
      if (textKey) posts[postIndex][textKey] = editText.value;
      if (quoteKey) posts[postIndex][quoteKey] = editQuote.value;
      if (listKey) posts[postIndex][listKey] = editList.value.split(",").map((item) => item.trim());
      if (tagsKey) posts[postIndex][tagsKey] = editTags.value.split(",").map((tag) => tag.trim()) || `miscellaneous Topics`;
  
      // Save the updated array back to localStorage
      localStorage.setItem("NewCard", JSON.stringify(posts));
  
      alert("Post updated successfully!");
      // Redirect or reload after saving changes
      window.location.href = "/pages/admin/dashboard.html";
    } else {
      alert("Post not found for updating");
    }
  });
  
  // Cancel button functionality
  document.getElementById("cancelEdit").addEventListener("click", () => {
   
    window.location.href = "/pages/admin/dashboard.html";
  });


})
