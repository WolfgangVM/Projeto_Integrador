document.addEventListener('DOMContentLoaded', () => {
    const abrirBtn = document.getElementById('abrir');
    const fecharBtn = document.getElementById('fechar');
    const sidebar = document.getElementById('sidebar');

    // Evento para abrir a sidebar
    abrirBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir comportamento padrão
        sidebar.style.display = 'flex'; // Exibir a sidebar
    });

    // Evento para fechar a sidebar
    fecharBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir comportamento padrão
        sidebar.style.display = 'none'; // Ocultar a sidebar
    });
});

// const navLocais = document.getElementById('nav-locais');

// // Evento de click ao elemento
// navLocais.addEventListener('click', function(event) {
//   // Verifique se o click foi no elemento que você deseja
//   if (event.target.tagName === 'dropdown-menu') {
//     // Mostra ou esconde o dropdown
//     const dropdown = event.target.nextElementSibling;
//     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
//   }
// });
