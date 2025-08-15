export class MensagemView{
    elemento

    constructor(elemento){
        this.elemento = elemento;
    }

    mostrarErro(msg) {
        this.elemento.textContent = msg;
        this.elemento.style.display = "block";
        this.elemento.style.color = "red";
    }

    mostrarSucesso(msg) {
        this.elemento.textContent = msg;
        this.elemento.style.display = "block";
        this.elemento.style.color = "green";
    }

}