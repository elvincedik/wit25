console.log("hi");



const images = [
    'linear-gradient(135deg, rgba(68, 85, 159, 0.6) 0%, rgba(75, 48, 103, 0.6) 100%), url(./assets/images/background-images/IMG_0096.jpg)',
    'linear-gradient(135deg, rgba(68, 85, 159, 0.6) 0%, rgba(75, 48, 103, 0.6) 100%), url(./assets/images/background-images/IMG_0035.jpg)',
    'linear-gradient(135deg, rgba(68, 85, 159, 0.6) 0%, rgba(75, 48, 103, 0.6) 100%), url(./assets/images/background-images/IMG_0208.jpg)',
    'linear-gradient(135deg, rgba(68, 85, 159, 0.6) 0%, rgba(75, 48, 103, 0.6) 100%), url(./assets/images/background-images/IMG_0041.jpg)'
  ];

  let index = 0;
  const bgDiv = document.getElementById('header');

  function changeBackground() {
    bgDiv.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
  }

  // Initial call
  changeBackground();

  // Change every 3 seconds
  setInterval(changeBackground, 3000);