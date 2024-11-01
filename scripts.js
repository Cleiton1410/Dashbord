document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    // Abre/fecha o menu ao clicar no link do dropdown
    dropdown.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o comportamento padrão do link
      dropdownMenu.classList.toggle("show"); // Alterna a visibilidade do menu
      event.stopPropagation()
    });
  
    // Fecha o dropdown se o usuário clicar fora dele
    window.addEventListener("click", function (event) {
      // Verifica se o clique foi fora do dropdown e do menu
      if (!dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.add("show"); // Remove a classe 'show' se clicar fora
      }
    });
    dropdownMenu.addEventListener("click",function(event){
      event.stopPropagation()
    });
  });
  