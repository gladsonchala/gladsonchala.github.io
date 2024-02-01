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
