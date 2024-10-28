// Adicionando evento para mostrar o dropdown
    document.querySelector('.dropdown').addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        document.querySelector('.dropdown-menu').classList.toggle('show');
    });

    // Fecha o dropdown se clicar fora
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown-menu') && !event.target.matches('.dropdown-menu *')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
