const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Remove active state from all
    tabLinks.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Activate the clicked tab and its content
    link.classList.add("active");
    document.getElementById(link.dataset.tab).classList.add("active");
  });
});
