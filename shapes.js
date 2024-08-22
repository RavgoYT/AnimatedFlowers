  const numOfFlowers = 11; // Number of flowers
  const growGarden = () => {
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    let positions = [];

    function getNum() {
      let pos = getRandomArbitrary(0, 100);
      for (let x = 0; x < positions.length; x++) {
        if (pos > positions[x] - 3 && pos < positions[x] + 3) {
          return false;
        }
      }
      positions.push(pos);
    }

    while (positions.length < numOfFlowers) {
      getNum();
    }

    let more = setInterval(function() {
      let flwr = document.createElement('div');
      let dim = getRandomArbitrary(30, 80); // Size for large petals
      let smallDim = dim / 2; // Size for small petals
      let leftPos = positions[0];
      positions.shift();

      flwr.classList.add('dandelion'); // Class name for dandelion
      flwr.innerHTML = `
        <div class="dandelion__leaf--left"></div>
        <div class="dandelion__leaf--right"></div>
        <div class="dandelion__stem"></div>
        <div class="dandelion__center"></div>
        
        <!-- Large petals -->
        <div class="dandelion__lpetal--1"></div>
        <div class="dandelion__lpetal--2"></div>
        <div class="dandelion__lpetal--3"></div>
        <div class="dandelion__lpetal--4"></div>
        <div class="dandelion__lpetal--5"></div>
        <div class="dandelion__lpetal--6"></div>
        <div class="dandelion__lpetal--7"></div>
        <div class="dandelion__lpetal--8"></div>
        <div class="dandelion__lpetal--9"></div>
        
        <!-- Small petals -->
        <div class="dandelion__spetal--1"></div>
        <div class="dandelion__spetal--2"></div>
        <div class="dandelion__spetal--3"></div>
        <div class="dandelion__spetal--4"></div>
        <div class="dandelion__spetal--5"></div>
        <div class="dandelion__spetal--6"></div>
        <div class="dandelion__spetal--7"></div>
        <div class="dandelion__spetal--8"></div>
        <div class="dandelion__spetal--9"></div>
      `;

      // Set positions and sizes for large petals
      flwr.style.left = `${leftPos}vw`;
      flwr.style.height = `${dim}vmin`;
      flwr.style.width = `${dim}vmin`;
      flwr.style.zIndex = 100 - dim;
      flwr.style.filter = `saturate(${getRandomArbitrary(70, 100)}%) brightness(${getRandomArbitrary(80, 150)}%)`;

      // Add styles for small petals
      const smallPetals = flwr.querySelectorAll('[class^="dandelion__spetal"]');
      smallPetals.forEach((petal) => {
        petal.style.width = `${smallDim}vmin`;
        petal.style.height = `${smallDim}vmin`;
      });

      document.querySelector('body').appendChild(flwr);
    }, 150);

    setTimeout(function() {
      window.clearInterval(more);
    }, numOfFlowers * 150);
  }

  document.body.addEventListener('click', () => {
    growGarden();
  });
