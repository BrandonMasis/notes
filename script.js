const title = document.querySelector(".container *:nth-child(1)");
const paragraph = document.querySelector(".container *:nth-child(2)");

if (localStorage.getItem("title") == null) {
  title.textContent = "Edit this title!";
} else {
  title.textContent = localStorage.getItem("title");
}

paragraph.value = localStorage.getItem("paragraph");

title.addEventListener("focusout", () => {
  localStorage.setItem("title", `${title.textContent}`);
});

paragraph.addEventListener("input", () => {
  localStorage.setItem("paragraph", `${paragraph.value}`);
});
