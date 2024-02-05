let typingEffect = new Typed(".typedText", {
  strings: ["Secure", "Empowering", "Fast"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  cursorChar: "|",
});
let cursorElement = document.querySelector(".typed-cursor");
if (cursorElement) {
  cursorElement.style.color = "#ffbf00";
}
