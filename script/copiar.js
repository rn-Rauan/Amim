
const btnCopiar = document.getElementById("btnCopiar");
// Texto que queremos copiar para a área de transferência
const texto = "(86) 99918-3229";
btnCopiar.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(texto);
        // Usa a API Clipboard para escrever o texto na área de transferência
        alert("Número copiado para a área de transferência!");
    }
    catch (err) {
        // Caso ocorra algum erro, mostramos no console
        console.error("Erro ao copiar: ", err);
    }
});
//# sourceMappingURL=copiar.js.map