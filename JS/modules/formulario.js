import {
    salvarCadastro,
    recuperarCadastro
} from "./storage.js";


export function restaurarFormulario() {

    const usuario = recuperarCadastro();

    if (!usuario) {
        return;
    }

    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.nome.value = usuario.nome || "";
    formulario.data.value = usuario.dataNascimento || "";
    formulario.cpf.value = usuario.cpf || "";
    formulario.email.value = usuario.email || "";
    formulario.telefone.value = usuario.telefone || "";

    formulario.rua.value = usuario.rua || "";
    formulario.numero.value = usuario.numero || "";
    formulario.bairro.value = usuario.bairro || "";
    formulario.cidade.value = usuario.cidade || "";
    formulario.estado.value = usuario.estado || "";
    formulario.cep.value = usuario.cep || "";
}


export function mostrarMensagem(texto, tipo) {

    if (typeof Swal !== "undefined") {

        Swal.fire({
            title:
                tipo === "sucesso"
                    ? "Tudo certo!"
                    : "Atenção!",

            text: texto,

            icon:
                tipo === "sucesso"
                    ? "success"
                    : "error",

            confirmButtonText: "OK"
        });
    }


    const mensagem =
        document.querySelector("#mensagem-cadastro");

    if (!mensagem) {
        return;
    }

    mensagem.textContent = texto;

    if (tipo === "sucesso") {

        mensagem.style.color =
            "var(--success-color)";

        mensagem.style.backgroundColor =
            "var(--success-background)";

    } else {

        mensagem.style.color =
            "var(--error-color)";

        mensagem.style.backgroundColor =
            "var(--error-background)";
    }

    mensagem.style.padding = "16px";
    mensagem.style.marginTop = "16px";
    mensagem.style.borderRadius = "8px";
}


export function configurarFormulario(conteudo) {

    conteudo.addEventListener("input", function(event) {

        const campo = event.target;

        if (campo.closest("#form-cadastro")) {

            if (campo.checkValidity()) {

                campo.style.borderColor =
                    "var(--success-color)";

            } else {

                campo.style.borderColor =
                    "var(--error-color)";
            }
        }
    });


    conteudo.addEventListener("submit", function(event) {

        if (event.target.id !== "form-cadastro") {
            return;
        }

        event.preventDefault();

        const formulario = event.target;

        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            return;
        }


        const dadosUsuario = {

            nome: formulario.nome.value.trim(),

            dataNascimento: formulario.data.value,

            cpf: formulario.cpf.value.trim(),

            email: formulario.email.value.trim(),

            telefone: formulario.telefone.value.trim(),

            rua: formulario.rua.value.trim(),

            numero: formulario.numero.value.trim(),

            bairro: formulario.bairro.value.trim(),

            cidade: formulario.cidade.value.trim(),

            estado: formulario.estado.value.trim(),

            cep: formulario.cep.value.trim()
        };


        if (dadosUsuario.nome.length < 3) {

            mostrarMensagem(
                "O nome precisa ter pelo menos 3 caracteres.",
                "erro"
            );

            return;
        }


        if (dadosUsuario.estado.length !== 2) {

            mostrarMensagem(
                "Informe a sigla do estado com duas letras.",
                "erro"
            );

            return;
        }


        salvarCadastro(dadosUsuario);


        mostrarMensagem(
            "Cadastro realizado com sucesso!",
            "sucesso"
        );


        formulario.reset();
    });
}