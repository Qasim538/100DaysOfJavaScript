// Mock API endpoint for fetching recommendations
const API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=8"; // Replace this with a real API

// Function to fetch recommended destinations
async function fetchRecommendations() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Generate cards dynamically
    const recommendationsContainer = document.getElementById('recommendationsContainer');
    recommendationsContainer.innerHTML = ""; // Clear existing content

    data.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4');

      card.innerHTML = `
        <img src="${item.url}" alt="${item.title}" class="w-full rounded-t-lg">
        <h3 class="text-xl font-bold mt-4">${item.title}</h3>
        <p class="text-gray-600 mt-2">Explore the wonders of this destination.</p>
      `;

      recommendationsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
}

// Function for search
function searchDestination() {
  const input = document.getElementById('destinationInput').value;
  if (input.trim()) {
    alert(`Searching for: ${input}`);
  } else {
    alert('Please enter a destination to search.');
  }
}

// Fetch recommendations on page load
document.addEventListener("DOMContentLoaded", fetchRecommendations);
