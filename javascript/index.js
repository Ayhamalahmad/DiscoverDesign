let spanUp = document.querySelector(".up");
let menuBotton = document.querySelector(".toggle-menu");
//
let ullinks = document.querySelector(".ullinks");
let lilinks = document.querySelectorAll(".ullinks li");
let upBotton = document.querySelectorAll(".up");
let skills = document.querySelector(".skills");
let progSpan = document.querySelectorAll(".prog span");
let number = document.querySelectorAll(".box .number");
let stats = document.querySelector(".stats");
let dYear = document.querySelector(".dYear");
//
let shuffles = document.querySelectorAll(".shuffle li");
let imageContainer = document.querySelectorAll(".image-container  .box");
//
let landing = document.querySelector(".landing");
//
let changerLeft = document.querySelector(".changer-left");
let changerRight = document.querySelector(".changer-right");
let bullets = document.querySelectorAll(".bullets li");
// console.log(changerRight);
let started = false;
// Initialize index to keep track of the current image
let currentIndex = 0; 
// Array of image URLs
let images = [
  "../imges/jesse-cason-LEWbO3MqUsM-unsplash.jpg",
  "../imges/landing-1.jpg",
  "../imges/landing-3.jpg",
  "../imges/landing-4.jpg",
  "../imges/landing-5.jpg",
  "../imges/landing-6.jpg",
];
// Event listener for the "changerRight" button
changerRight.addEventListener("click", () => {
  changeImage(1); // Increment index for changerRight
});
// Event listener for the "changerLeft" button
changerLeft.addEventListener("click", () => {
  changeImage(-1); // Decrement index for changerLeft
});
// Function to change the background image
function changeImage(increment){
    // Update the current index cyclically
  currentIndex = (currentIndex + increment + images.length) % images.length; //Increment index cyclically
   // Set the background image of the landing element
  landing.style.backgroundImage = `url(${images[currentIndex]})`;
}
// open Menu
menuBotton.addEventListener("click", (e) => {
  ullinks.classList.toggle("open");
});

//  Close Menu
document.addEventListener("click", function (e) {
  if (e.target !== menuBotton && e.target !== ullinks && e.target !== lilinks) {
    if (ullinks.classList.contains("open")) {
      ullinks.classList.toggle("open");
    }
  }
});
//  Stop The Propagation On Menu
ullinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Global function Scroll
function scrolTo(e) {
  e.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// trigger
scrolTo(lilinks);
scrolTo(upBotton);

// Function  Add class To any Element  With ScrollY And Add Width To Element And To Starting count
function showAndG(e, scrollnumber, aClass, progres) {
  window.addEventListener("scroll", () => {
    // Add & Remove class To any Element
    if (window.scrollY >= scrollnumber) {
      e.classList.add(aClass);
    } else {
      e.classList.remove(aClass);
    }
    // Add Width To Element
    if (window.scrollY >= skills.offsetTop) {
      progres.forEach((span) => {
        span.style.width = span.dataset.progres;
      });
    }
    // Count Numbers on Stats
    if (window.scrollY >= stats.offsetTop) {
      if (!started) {
        number.forEach((num) => startCount(num));
      }
      started = true;
    }
  });
}

showAndG(spanUp, 1000, "show", progSpan);

//   Count Numbers on Stats
function startCount(e) {
  let goal = e.dataset.goal;
  let co = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(co);
    }
  }, 2000 / goal);
}

//  Dynamic Year
let dynamicYearText = document.createTextNode(new Date().getFullYear());
dYear.appendChild(dynamicYearText);

// Show Peogress Number
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= skills.offsetTop) {
    progSpan.forEach((span) => {
      span.classList.add("prog-number");
    });
  }
});

// event click
shuffles.forEach((shuffle) => {
  shuffle.addEventListener("click", hnadleclass);
  shuffle.addEventListener("click", handleBox);

  //hnadle class
  function hnadleclass() {
    shuffles.forEach((shuffle) => {
      shuffle.classList.remove("active");
      this.classList.add("active");
    });
  }

  // Change displayed box
  function handleBox() {
    imageContainer.forEach((image) => {
      image.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((element) => {
      element.style.display = "block";
    });
  }
});
