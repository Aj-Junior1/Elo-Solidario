import { paginas } from "./modules/templates.js";

import {
    configurarFormulario,
    restaurarFormulario
} from "./modules/formulario.js";


const conteudo =
    document.querySelector("#conteudo");


function renderizarPagina() {

    let rota =
        window.location.hash.replace("#", "");


    if (rota === "") {
        rota = "inicio";
    }


    if (
        rota === "doacoes" ||
        rota === "voluntariado"
    ) {

        conteudo.innerHTML =
            paginas.projetos;


        const projetoSelecionado =
            document.querySelector(`#${rota}`);


        if (projetoSelecionado) {

            projetoSelecionado.scrollIntoView({
                behavior: "smooth"
            });
        }

        return;
    }


    if (paginas[rota]) {

        conteudo.innerHTML =
            paginas[rota];


        if (rota === "cadastro") {

            restaurarFormulario();

        }

    } else {

        conteudo.innerHTML = `
            <section>

                <h2>Página não encontrada</h2>

                <p>
                    O conteúdo solicitado não foi encontrado.
                </p>

                <a href="#inicio">
                    Voltar para o início
                </a>

            </section>
        `;
    }
}


configurarFormulario(conteudo);


window.addEventListener(
    "hashchange",
    renderizarPagina
);


window.addEventListener(
    "DOMContentLoaded",
    renderizarPagina
);