export function salvarCadastro(dadosUsuario) {

    localStorage.setItem(
        "usuarioEloSolidario",
        JSON.stringify(dadosUsuario)
    );
}


export function recuperarCadastro() {

    const dadosSalvos =
        localStorage.getItem("usuarioEloSolidario");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}