function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDelay = Math.random() * 3 + "s";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.querySelector(".floating-hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 3000);

function openLetter() {
  document.getElementById("letterContent").classList.add("show");
  document.querySelector(".envelope").classList.add("open");
}

function closeLetter() {
  document.getElementById("letterContent").classList.remove("show");
  document.querySelector(".envelope").classList.remove("open");
}

document
  .getElementById("letterContent")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeLetter();
    }
  });

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".photo-container").forEach((container, index) => {
  container.style.opacity = "0";
  container.style.transform = "translateY(50px)";
  container.style.transition = `opacity 0.8s ease ${
    index * 0.2
  }s, transform 0.8s ease ${index * 0.2}s`;
  observer.observe(container);
});
