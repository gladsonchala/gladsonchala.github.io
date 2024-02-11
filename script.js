document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  const cursorSize = 400; // Set the size of the cursor
  cursor.style.top = e.pageY - cursorSize / 2 + 'px'; // Center the cursor vertically
  cursor.style.left = e.pageX - cursorSize / 2 + 'px'; // Center the cursor horizontally
});

function createFireflies(numFireflies) {
  const container = document.getElementById('fireflies-container');

  for (let i = 0; i < numFireflies; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    firefly.style.top = `${Math.random() * 100}vh`;
    firefly.style.left = `${Math.random() * 100}vw`;
    container.appendChild(firefly);

    // Set a random timeout for the firefly to disappear
    const disappearTimeout = Math.random() * 5000 + 2000; // between 2 to 7 seconds
    setTimeout(() => {
      container.removeChild(firefly);
    }, disappearTimeout);
  }
}

function spawnFireflies(num) {
  // Spawn the first set of fireflies together
  createFireflies(num);

  // Set a random interval for spawning individual fireflies
  const spawnInterval = Math.random() * 1000 + 2000; // between 2 to 7 seconds
  setTimeout(() => {
    createFireflies(1); // Spawn one firefly
    spawnFireflies(30); // Call itself after the interval
  }, spawnInterval);
}

// Initial firefly spawning
spawnFireflies(50);



// Cards Parallax Movement
var card = document.querySelector(".card:nth-child(2)");
var wrapper = document.querySelector(".wrapper");

function rotateCard(card, x, y) {
  var coords = card.getBoundingClientRect();

  var cardX = coords.left + card.offsetWidth / 2;
  var cardY = coords.top + card.offsetHeight / 2;

  var angleX = (cardY - y) / 20;
  var angleY = (cardX - x) / -20;

  wrapper.style.setProperty("--rotateX", angleX + "deg");
  wrapper.style.setProperty("--rotateY", angleY + "deg");
}

wrapper.addEventListener("mousemove", function (e) {
  var rect = wrapper.getBoundingClientRect();
  var top = rect.top, left = rect.left;
  var x = e.x, y = e.y, clientX = e.clientX, clientY = e.clientY;

  var gradientX = clientX - left;
  var gradientY = clientY - top;

  rotateCard(card, x, y);
  wrapper.style.setProperty("--x", gradientX + "px");
  wrapper.style.setProperty("--y", gradientY + "px");
});

wrapper.addEventListener("mouseenter", function () {
  wrapper.style.setProperty("--scale", "1");
});

wrapper.addEventListener("mouseleave", function () {
  wrapper.style.setProperty("--scale", "0");
});


const element = document.querySelector('.typed-text');
const words = ['Web Designer', 'Web Developer', 'FrontEnd Developer', 'Apps Designer', 'Apps Developer'];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (i < words.length) {
    currentWord = words[i];
    if (!isDeleting && j <= currentWord.length) {
      element.textContent = currentWord.substring(0, j);
      j++;
    } else if (isDeleting && j >= 0) {
      element.textContent = currentWord.substring(0, j);
      j--;
    }

    if (j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 500); // Delay before deleting
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      setTimeout(type, 300); // Delay before typing the next word
    } else {
      setTimeout(type, 100); // Typing speed
    }
  } else {
    // Reset variables to start the loop again
    i = 0;
    j = 0;
    isDeleting = false;
    setTimeout(type, 200); // Delay before starting the loop again
  }
}

// Start the typing effect
type();