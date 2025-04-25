 // Sample car data (you can add more cars as needed)
 const cars = [
  { make: 'Mercedes-Benz', model: 'S-Class', year: 2022, trim: 'Premium', image: '../assets/autoworld images/benz.jpeg' },
  { make: 'BMW', model: '5 Series', year: 2021, trim: 'Sport', image: '../assets/autoworld images/bmw.jpeg' },
  { make: 'Rolls-Royce', model: 'Phantom', year: 2022, trim: 'Luxury', image: '../assets/autoworld images/roycejpeg.jpeg"' },
  { make: 'Hyundai', model: 'Tucson', year: 2021, trim: 'Limited', image: '../assets/autoworld images/hyundai.jpeg' },
  { make: 'Toyota', model: 'Corolla', year: 2020, trim: 'XLE', image: '../assets/autoworld images/toyota.jpeg"' },
  { make: 'Honda', model: 'Civic', year: 2022, trim: 'Sport', image: '../assets/autoworld images/honda.jpeg' },
  { make: 'Ford', model: 'Mustang', year: 2021, trim: 'GT', image: '../assets/autoworld images/benz.jpeg' },
  { make: 'Lamborghini', model: 'Aventador', year: 2021, trim: 'Supercar', image: '../assets/autoworld images/bmw.jpeg' },
  { make: 'BMW', model: 'X5', year: 2020, trim: 'M Sport', image: '../assets/autoworld images/benz.jpeg' },
  { make: 'Toyota', model: 'Land Cruiser', year: 2021, trim: 'Platinum', image: '../assets/autoworld images/benz.jpeg' }
];

// Store car data in localStorage
localStorage.setItem('cars', JSON.stringify(cars));

// Fetch car data from localStorage
const carData = JSON.parse(localStorage.getItem('cars')) || [];

// Get the car grid container
const carGrid = document.getElementById('services');

// Check if carGrid exists
if (!carGrid) {
  console.error('Car grid element not found.');
} else {
  // Display cars in the grid
  carData.forEach((car, index) => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${car.image}" alt="${car.make} ${car.model}" onerror="this.src='fallback.jpg'">
      <h2>${car.make} ${car.model} (${car.year})</h2>
      <p>Trim: ${car.trim}</p>
      <button onclick="viewDetails(${index})">View Details</button>
      <button onclick="compare(${index})">Compare</button>
    `;
    carGrid.appendChild(card);
  });
}

// View details function for the car
function viewDetails(index) {
  const selectedCar = carData[index];
  localStorage.setItem('selectedCar', JSON.stringify(selectedCar));  
  window.location.href = 'details.html';
}

function compare(index) {
  const selectedCar = carData[index];
  localStorage.setItem('firstCar', JSON.stringify(selectedCar));
  // Redirect to comparison page to select the second car
  window.location.href = 'comparePage.html';
}
