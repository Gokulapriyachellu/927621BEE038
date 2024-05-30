document.addEventListener('DOMContentLoaded', () => {
  const fetchBrandsBtn = document.getElementById('fetchBrandsBtn');
  fetchBrandsBtn.addEventListener('click', fetchTopBrands);
});

async function fetchTopBrands() {
  const numberOfBrands = document.getElementById('numberOfBrands').value;
  try {
    const response = await fetch(`/api/topBrands?limit=${numberOfBrands}`);
    const data = await response.json();
    displayBrands(data);
  } catch (error) {
    console.error('Error fetching top brands:', error);
  }
}

function displayBrands(brands) {
  const brandsList = document.getElementById('brandsList');
  brandsList.innerHTML = ''; // Clear previous list

  brands.forEach((brand, index) => {
    const li = document.createElement('li');
    li.textContent = brand;
    brandsList.appendChild(li);
  });
}
