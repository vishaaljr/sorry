document.addEventListener("DOMContentLoaded", () => {
  const openLetterButton = document.getElementById("openLetter");
  const intro = document.getElementById("intro");
  const letter = document.getElementById("letter");
  const forgiveButton = document.getElementById("forgiveButton");
  const response = document.getElementById("response");
  const heartsBurst = document.getElementById("heartsBurst");

  function releaseHearts(count = 24) {
    const hearts = ["💗", "💕", "💖", "💞", "♡", "✨"];
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");
      heart.className = "burst-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.setProperty("--left", `${Math.random() * 100}%`);
      heart.style.setProperty("--size", `${16 + Math.random() * 22}px`);
      heart.style.setProperty("--duration", `${2.4 + Math.random() * 2.2}s`);
      heart.style.animationDelay = `${Math.random() * 0.65}s`;
      heartsBurst.appendChild(heart);
      heart.addEventListener("animationend", () => heart.remove(), { once: true });
    }
  }

  openLetterButton.addEventListener("click", () => {
    intro.classList.add("hidden");
    letter.classList.remove("hidden");
    releaseHearts(30);
  });

  forgiveButton.addEventListener("click", () => {
    if (!response.classList.contains("hidden")) return;
    response.classList.remove("hidden");
    forgiveButton.textContent = "Big hugs for you 🤗💗";
    forgiveButton.disabled = true;
    forgiveButton.style.opacity = "0.8";
    releaseHearts(36);
  });
});
