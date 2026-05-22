document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const scrollTop = document.querySelector(".scroll-top");
  if (!scrollTop) return;

  const toggleScrollButton = () => {
    scrollTop.classList.toggle("visible", window.scrollY > 500);
  };

  toggleScrollButton();
  window.addEventListener("scroll", toggleScrollButton, { passive: true });
  scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
