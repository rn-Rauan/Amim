// Seleciona o botão
const darkModeToggle = document.getElementById("darkModeToggle");

// Checa se o usuário já tinha escolhido um tema antes
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark-mode");
}

// Ao clicar no botão, troca o tema
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Salva a escolha no localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
});
