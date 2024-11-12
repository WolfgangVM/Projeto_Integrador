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

