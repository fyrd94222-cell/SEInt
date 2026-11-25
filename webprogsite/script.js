document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#search-form");
  const input = document.querySelector("#search-input");
  const cards = document.querySelectorAll(".recipe-card");
  const message = document.querySelector("#search-message");
  const themeToggle = document.querySelector("#theme-toggle");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim().toLocaleLowerCase("uk");
      let visibleCount = 0;

      cards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLocaleLowerCase("uk");
        const matches = title.includes(query);
        card.hidden = !matches;
        if (matches) visibleCount++;
      });

      message.textContent = visibleCount
        ? `Знайдено рецептів: ${visibleCount}`
        : "Рецептів із такою назвою не знайдено.";
    });
  }

  if (input) {
    input.addEventListener("input", () => {
      if (!input.value.trim()) {
        cards.forEach((card) => { card.hidden = false; });
        message.textContent = "";
      }
    });
  }

  const toggleButtons = document.querySelectorAll(".toggle-steps");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling; 
      
      if (details && details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        btn.textContent = "Приховати";
      } else if (details) {
        details.classList.add("hidden");
        btn.textContent = "Детальніше";
      }
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      
      if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Світла тема";
      } else {
        themeToggle.textContent = "Темна тема";
      }
    });
  }
});
