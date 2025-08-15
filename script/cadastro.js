import { MensagemView } from "./mensagem.js";
import { Usuario } from "../class/Usuario.js";

const form = document.querySelector("#form-login");
const divMensagem = document.querySelector("#mensagem");

const mensagem = new MensagemView(divMensagem);
let usuario = null;
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = (document.querySelector("#nome")).value.trim();
  const email = (document.querySelector("#email")).value.trim();
  const senha = (document.querySelector("#senha")).value;
  const confirmarSenha = (document.querySelector("#confirmar-senha")).value;
  const dataNasc = (document.querySelector("#data-nascimento")).value;
  const genero = (document.querySelector("#genero")).value;

  // === Validação do Nome ===
  if (!nome) {
    mensagem.mostrarErro("O nome de usuário não pode estar vazio.");
    return;
  }
  if (nome.length > 15) {
    mensagem.mostrarErro("O nome de usuário deve ter no máximo 15 caracteres.");
    return;
  }

  // === Validação de Senha ===
  if (!senha) {
    mensagem.mostrarErro("A senha não pode estar vazia.");
    return;
  }

  // Critérios da senha:
  const regexSenha = /^(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

  if (!regexSenha.test(senha)) {
    mensagem.mostrarErro(
      "A senha deve ter no mínimo 8 caracteres, incluindo pelo menos 2 números, 1 caractere especial (!@#$%^&*), 1 letra maiúscula e 1 letra minúscula."
    );
    return;
  }

  // === Confirmar Senha ===
  if (senha !== confirmarSenha) {
    mensagem.mostrarErro("As senhas não coincidem.");
    return;
  }

  // === Campos obrigatórios ===
  if (!dataNasc || !genero) {
    mensagem.mostrarErro("Preencha todos os campos.");
    return;
  }

  usuario = new Usuario(nome, email, senha);

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    mensagem.mostrarSucesso("Cadastro realizado com sucesso!", usuario);

    window.location.href = "/html/home.html";

});



