// Search functionality
// document.getElementById('searchInput').addEventListener('keyup', function () {
//     const filter = this.value.toLowerCase();
//     const items = document.querySelectorAll('#bankList li');
  
//     items.forEach(item => {
//       const text = item.textContent.toLowerCase();
//       item.style.display = text.includes(filter) ? 'block' : 'none';
//     });
//   });
  
  // Modal functionality
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const loanAmount = document.getElementById('loanAmount');
  const interestRate = document.getElementById('interestRate');
  const repaymentDuration = document.getElementById('repaymentDuration');
  const installments = document.getElementById('installments');
  const closeButton = document.querySelector('.close-button');
  
  const bankDetails = {
    access: {
      title: "Access Bank",
      loanAmount: "Up to ₦10,000,000",
      interestRate: "18% per annum",
      repaymentDuration: "10 to 12 months",
      installments: "Monthly installments, early repayment allowed"
    },
    gtbank: {
      title: "GTBank",
      loanAmount: "Up to ₦15,000,000",
      interestRate: "19% per annum",
      repaymentDuration: "12 to 14 months",
      installments: "Fixed monthly payments, insurance included"
    },
    zenith: {
      title: "Zenith Bank",
      loanAmount: "Up to ₦20,000,000",
      interestRate: "17% per annum",
      repaymentDuration: "12 to 16 months",
      installments: "Flexible installments, subject to credit score"
    },
    stanbic: {
      title: "Stanbic IBTC",
      loanAmount: "Up to ₦30,000,000",
      interestRate: "16.5% per annum",
      repaymentDuration: "12 to 18 months",
      installments: "Monthly repayment with flexible terms"
    },
    uba: {
      title: "UBA",
      loanAmount: "Up to ₦15,000,000",
      interestRate: "18.5% per annum",
      repaymentDuration: "12 to 14 months",
      installments: "Monthly payments, optional insurance cover"
    },
    firstbank: {
      title: "First Bank",
      loanAmount: "Up to ₦25,000,000",
      interestRate: "17.5% per annum",
      repaymentDuration: "12 to 15 months",
      installments: "Fixed installments, early payment allowed"
    },
    cars45: {
      title: "Cars45",
      loanAmount: "Up to ₦7,000,000",
      interestRate: "20% per annum (varies by partner bank)",
      repaymentDuration: "Up to 8 months",
      installments: "Flexible, depends on vehicle value and partner bank"
    },
    autochek: {
      title: "Autochek Africa",
      loanAmount: "Up to ₦15,000,000",
      interestRate: "From 17% per annum",
      repaymentDuration: "12 to 14 months",
      installments: "Monthly payments, options from various banks"
    }
  };
  
  document.querySelectorAll('#bankList li').forEach(item => {
    item.addEventListener('click', function () {
      const bankKey = this.getAttribute('bank');
      const details = bankDetails[bankKey];
  
      modalTitle.textContent = details.title;
      loanAmount.textContent = details.loanAmount;
      interestRate.textContent = details.interestRate;
      repaymentDuration.textContent = details.repaymentDuration;
      installments.textContent = details.installments;
  
      modal.style.display = 'block';
    });
  });
  
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  function showWarranty() {
    var brand = document.getElementById("carBrand").value;
    var details = {
        "Toyota": "5-year or 60,000 miles standard warranty.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Toyota vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Toyota Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Honda": "3-year or 36,000 miles limited warranty.            <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Honda vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Honda Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "BMW": "4-year or 50,000 miles warranty with roadside assistance.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new BMW vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> BMW Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Mercedes": "4-year or 50,000 miles warranty with extended options.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Mercedes-Benz vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Mercedes-Benz Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Ford": "3-year or 36,000 miles bumper-to-bumper warranty.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Ford vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Ford Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Audi": "3-year or 36,000 miles bumper-to-bumper warranty.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Audi vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Audi Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Chevrolet": "3-year or 36,000 miles bumper-to-bumper warranty.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Chevrolet vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Chevrolet Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Nissan": "3-year or 36,000 miles bumper-to-bumper warranty.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Nissan vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Nissan Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Hyundai": "3-year or 36,000 miles bumper-to-bumper warranty.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Hyundai vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Hyundai Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit.",
        "Kia": "3-year or 36,000 miles bumper-to-bumper warranty.          <br><br> <b><h3>1. Basic Limited Warranty</h3></b> <br>i. <b>Covers :</b> 4 years / 50,000 miles (whichever comes first).<br>  <br>ii. <b>Covers :</b> Defects in materials or workmanship for all new Kia vehicles.    <br><br> <b><h3>2. Powertrain Warranty</h3></b> <br>  i.<b> Covers :</b> 6 years / 70,000 miles <br>  <br>ii. <b>Covers :</b> Engine, transmission, and drivetrain components (beyond the basic warranty).      <br><br> <b><h3>3. Corrosion (Rust) Warranty</h3></b> <br>  i.<b> Covers :</b> 5 years / Unlimited miles <br>  <br>ii. <b>Covers :</b> Rust perforation to the vehicle body panels.     <br><br> <b><h3>4.  Extended Warranty (Optional)</h3></b>  <br>  i.<b> Kia Extended Limited Warranty</b><br> <br>  ii.<b> Covers :</b>Up to 7 years / 100,000 miles <br>  <br>iii. <b>Covers :</b> Rust perforation to the vehicle body panels.    <br><br> <b><h3>5. Maintenance plan (optional)</h3></b>  <br>  i.<b> Prepaid Maintenance</b><br> <br>  ii.<b> Covers :</b>Up to 4 years / 40,000 miles <br>  <br>iii. <b>Covers :</b> Routine services (oil changes, brake fluid, air filters, etc.) at a lower cost than paying per visit."

    };
    document.getElementById("warrantyDetails").innerHTML = details[brand] || "Select a car brand to see details.";
}
  