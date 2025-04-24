// Make handleCars a global function
 // Sample car data (you can add more cars as needed)
 const cars = [
  { make: 'Mercedes-Benz', model: 'S-Class', year: 2022, trim: 'Premium', image: './assets/autoworld images/benz.jpeg' },
  { make: 'BMW', model: '5 Series', year: 2021, trim: 'Sport', image: './assets/autoworld images/bmw.jpeg' },
  { make: 'Rolls-Royce', model: 'Phantom', year: 2022, trim: 'Luxury', image: './assets/autoworld images/roycejpeg.jpeg"' },
  { make: 'Hyundai', model: 'Tucson', year: 2021, trim: 'Limited', image: './assets/autoworld images/hyundai.jpeg' },
  { make: 'Toyota', model: 'Corolla', year: 2020, trim: 'XLE', image: './assets/autoworld images/toyota.jpeg"' },
  { make: 'Honda', model: 'Civic', year: 2022, trim: 'Sport', image: './assets/autoworld images/honda.jpeg' },
  { make: 'Ford', model: 'Mustang', year: 2021, trim: 'GT', image: './assets/autoworld images/benz.jpeg' },
  { make: 'Lamborghini', model: 'Aventador', year: 2021, trim: 'Supercar', image: './assets/autoworld images/bmw.jpeg' },
  { make: 'BMW', model: 'X5', year: 2020, trim: 'M Sport', image: './assets/autoworld images/benz.jpeg' },
 
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
  window.location.href = './pages/details.html';
}

function compare(index) {
  const selectedCar = carData[index];
  localStorage.setItem('firstCar', JSON.stringify(selectedCar));
  // Redirect to comparison page to select the second car
  window.location.href = './pages/comparePage.html';
}







document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle functionality
  const menuIcon = document.getElementById("menubar");
  const toggleNav = document.getElementById("togglenavs");
  const items = document.querySelectorAll('.vid-items');
  const t1 = document.getElementById('t1');
  const t2 = document.getElementById('t2');
  const terms = document.querySelector(".term");
  const terms1 = document.querySelector(".term1");

  //toggle navs code
  menuIcon.addEventListener("click", function () {
      toggleNav.classList.toggle("active");
  });

  //slide down tags for terms
  t1.addEventListener("click", function () {
    terms.classList.toggle("active");
  });

  t2.addEventListener("click", function () {
    terms1.classList.toggle("active");
    console.log("hwell0y")
  });

  // Initialize Splide (carousel)
  // var splide = new Splide('.splide', {
  //   type      : 'loop',
  //   padding: '15px',
  //   focus     : 'center',
  //   gap  : '5px',
  //   autoplay  : true,
  //   arrows    : false,
  //   pagination: false,
  //   interval  : 3000,
  // });
  // splide.mount();

  // Scroll detection for sticky video items
  window.addEventListener('scroll', () => {
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isStuck = rect.top <= 0 && rect.bottom > 0;
        item.classList.toggle('stuck', isStuck);
    });
  });

  // // Car brands to fetch
  // const brands = [
  //   "mercedes-benz", "bmw", "rolls-royce", "hyundai",
  //   "toyota", "honda", "ford", "lamborghini"
  // ];

  // const carGrid = document.getElementById("carGrid");

  // function fetchCarsForBrand(brand) {
  //   const script = document.createElement('script');
  //   script.src = `https://www.carqueryapi.com/api/0.3/?callback=handleCars&cmd=getTrims&make=${brand}`;
  //   document.body.appendChild(script);
  // }


  // // Fetch cars for each brand
  // brands.forEach(fetchCarsForBrand);

  

});
