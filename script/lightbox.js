// Seleciona elementos do lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Abre o lightbox ao clicar em qualquer imagem da grid
document.querySelectorAll('.grid-fotos img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    });
});

// Fecha o lightbox ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fecha o lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
