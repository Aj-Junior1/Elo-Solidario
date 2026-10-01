export const projetos = [
    {
        id: "doacoes",
        titulo: "Projeto de Doações",
        categoria: "Doações",
        status: "Ativo",
        imagem: "../IMAGENS/Projeto-Doacoes.png",
        descricao: "Arrecadamos alimentos, roupas, materiais escolares e recursos para ajudar pessoas e famílias em situação de vulnerabilidade."
    },

    {
        id: "voluntariado",
        titulo: "Projeto de Voluntariado",
        categoria: "Voluntariado",
        status: "Vagas abertas",
        imagem: "../IMAGENS/Projeto-Voluntariado.png",
        descricao: "Os voluntários ajudam na organização das doações, campanhas, eventos e demais ações sociais realizadas pela Elo Solidário."
    }
];


export function gerarCardsProjetos() {

    return projetos.map(function(projeto) {

        return `
            <article class="card-projeto" id="${projeto.id}">

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.titulo}"
                >

                <div class="card-conteudo">

                    <div class="badges">

                        <span class="badge badge-doacao">
                            ${projeto.categoria}
                        </span>

                        <span class="badge badge-ativo">
                            ${projeto.status}
                        </span>

                    </div>

                    <h2>${projeto.titulo}</h2>

                    <p>${projeto.descricao}</p>

                </div>

            </article>
        `;

    }).join("");
}