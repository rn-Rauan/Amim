
const form = document.getElementById('filtros');
const busca = document.getElementById('busca');
const info = document.getElementById('resultado-info');
const itens = document.querySelectorAll('article.produto');

function aplicarFiltros() {
    // Pega a categoria selecionada
    const categoria = form.querySelector('input[name="categoria"]:checked').value;
    // Armazena o texto da busca em minúsculo em uma variável
    const textoBusca = busca.value.toLowerCase();

    // retorna qunatos itens estão visíveis
    let visiveis = 0;

    // Itera sobre todos os itens do catálogo
    itens.forEach(item => {
        // Pega a categoria do item
        const categoriaItem = item.getAttribute('data-categoria');
        // Pega as tags do item
        const tags = item.getAttribute('data-tags').toLowerCase();

        // Retorna true se passar no filtro de categoria
        const passaCategoria = (categoria === 'todos' || categoria === categoriaItem);
        // retorna true se passar no filtro de busca
        const passaBusca = (textoBusca === '' || tags.includes(textoBusca));

        // Mostra ou esconde o item
        if (passaCategoria && passaBusca) {
            item.parentElement.style.display = '';
            visiveis++;
        } else {
            item.parentElement.style.display = 'none';
        }
    });

    // Atualiza a mensagem
    if (categoria === 'todos' && textoBusca === '') {
        info.textContent = 'Mostrando todos os itens.';
    } else {
        info.textContent = `Mostrando ${visiveis} item(s).`;
    }
}

// Eventos
form.addEventListener('change', aplicarFiltros);
busca.addEventListener('input', aplicarFiltros);
// Aplica ao carregar
aplicarFiltros();
