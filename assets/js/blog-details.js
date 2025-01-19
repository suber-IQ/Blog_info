// blog-details.js

document.addEventListener("DOMContentLoaded", () => {
    // Load admin-specific components
    loadComponent('blogDetailHeader', '.././components/admin-header.html');
    initBlogDetails();

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
function initBlogDetails() {
    console.log("Hello world");
 
    // Get the ID from the URL query parameter
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");
    console.log("Blog ID:", blogId); // Debugging
 
    const blogContent = document.getElementById("blogContent");
 
    // Fetch the blog data from localStorage
    let storedBlogs = [];
    try {
       storedBlogs = JSON.parse(localStorage.getItem("NewCard")) || [];
    } catch (error) {
       console.error("Error parsing localStorage data:", error);
       blogContent.innerHTML = `<p>Error loading blog data. Please try again later.</p>`;
       return;
    }
 
    // Find the blog post with the matching ID
    const blogPost = storedBlogs.find(blog => blog.id === blogId);
 
    if (blogPost) {
       // Dynamically generate the blog details
       const imageKey = Object.keys(blogPost).find(key => key.startsWith("image_"));
       const headingKey = Object.keys(blogPost).find(key => key.startsWith("heading_"));
       const textKey = Object.keys(blogPost).find(key => key.startsWith("text_"));
       const quoteKey = Object.keys(blogPost).find(key => key.startsWith("quote_"));
       const tagsKey = Object.keys(blogPost).find(key => key.startsWith("tags_"));
       const listKey = Object.keys(blogPost).find(key => key.startsWith("list_"));
 
       // Update document title
       document.title = blogPost[headingKey] || "Blog Details";
 
       blogContent.innerHTML = `
          <div class="blog_details">
             <button id="backButton" class="back-btn">
                <span><i class="fa-solid fa-arrow-left"></i></span> Back
             </button>
 
             <div class="blog_image">
                <img src="${blogPost[imageKey] || 'https://res.cloudinary.com/suberiq/image/upload/v1737222496/tlrb5drgjzhnibuha8mf.png'}" alt="${blogPost[headingKey] || 'Blog Image'}">
             </div>
             <div class="blog_content">
                <h2>${blogPost[headingKey] || "No Heading Available"}</h2>
                <p>${blogPost[textKey] || "No Content Available"}</p>
                ${
                   blogPost[quoteKey]
                      ? `<blockquote>"${blogPost[quoteKey]}"</blockquote>`
                      : ""
                }
                ${
                   blogPost[listKey]
                      ? `<div class="blog_list">
                            <strong>List:</strong>
                            <ul>
                               ${blogPost[listKey]
                                  .map(item => `<li>${item}</li>`)
                                  .join("")}
                            </ul>
                         </div>`
                      : ""
                }
                <div class="blog_tags">
                   <strong>Tags:</strong>
                   <ul>
                      ${
                         blogPost[tagsKey]
                            ? blogPost[tagsKey]
                                 .map(tag => `<li class="tag">#${tag}</li>`)
                                 .join("")
                            : "<li>No Tags Available</li>"
                      }
                   </ul>
                </div>
             </div>
          </div>
       `;
 
       // Add back button functionality
       document.getElementById("backButton").addEventListener("click", () => {
          window.history.back();
       });
    } else {
       blogContent.innerHTML = `<p>Blog post not found.</p>`;
    }
 }
 







