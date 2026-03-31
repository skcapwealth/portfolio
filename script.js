
// Smooth scroll
function goToPage(name) {
    // go to name.html
    window.location.href = name + ".html";
}

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
