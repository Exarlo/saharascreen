'use strict';

// variables for navbar menu toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');


// navbar menu toggle function
function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);



// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

// Function to handle form submission
document.querySelector('.navbar-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchTerm = event.target.elements.search.value.trim();
  if (!searchTerm) {
    alert('Please enter a search term.');
    return;
  }

  // Construct the search URL with the query parameter
  const searchURL = `search.html?query=${encodeURIComponent(searchTerm)}`;
  
  // Redirect to the search results page
  window.location.href = searchURL;
});
