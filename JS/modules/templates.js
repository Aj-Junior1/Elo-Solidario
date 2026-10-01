import { gerarCardsProjetos } from "./projetos.js";


export const paginas = {

    inicio: `
        <section>

            <h2>Quem Somos?</h2>

            <div class="grid-container">

                <img
                    class="imagem-quem-somos"
                    src="../IMAGENS/Quem-Somos.png"
                    alt="Voluntários da Elo Solidário distribuindo doações e apoiando a comunidade"
                >

                <p class="texto-quem-somos">
                    A Elo Solidário é uma organização criada para ações sociais,
                    doações e trabalho voluntário. Buscamos fortalecer a
                    solidariedade e construir uma comunidade mais unida
                    e acolhedora.
                </p>

            </div>

        </section>


        <section>

            <h2>O Que Fazemos?</h2>

            <p>
                Desenvolvemos projetos e ações que promovem o bem-estar social,
                a inclusão e a justiça. Trabalhamos para criar impacto positivo
                em comunidades carentes, oferecendo apoio através de doações,
                voluntariado e programas de capacitação.
            </p>

            <a href="#projetos">
                Conheça Nossos Projetos
            </a>

        </section>


        <section>

            <h2>Fale Conosco</h2>

            <p>
                Tem alguma dúvida ou sugestão?
                Entre em contato com a gente.
            </p>

        </section>
    `,


    projetos: `
        <section>

            <h2>Nossos Projetos</h2>

            <p>
                Conheça algumas das iniciativas desenvolvidas
                pela Elo Solidário e saiba como participar.
            </p>

            <div class="alerta alerta-informacao">

                <strong>Participe!</strong>

                Nossos projetos estão recebendo doações
                e novos voluntários.

            </div>

        </section>


        <div class="projetos-container">

            ${gerarCardsProjetos()}

        </div>
    `,


    cadastro: `
        <section>

            <h2>Cadastro de Usuário</h2>

            <p>
                Preencha os dados abaixo para fazer parte
                da Elo Solidário.
            </p>


            <form id="form-cadastro">

                <fieldset>

                    <legend>Dados Pessoais</legend>


                    <label for="nome">Nome completo</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        minlength="3"
                        required
                    >


                    <label for="data">Data de nascimento</label>

                    <input
                        type="date"
                        id="data"
                        name="data"
                        required
                    >


                    <label for="cpf">CPF</label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        maxlength="14"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required
                    >


                    <label for="email">E-mail</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="exemplo@email.com"
                        required
                    >


                    <label for="telefone">Telefone</label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        maxlength="15"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>Endereço</legend>


                    <label for="rua">Rua</label>

                    <input
                        type="text"
                        id="rua"
                        name="rua"
                        placeholder="Digite o nome da rua"
                        required
                    >


                    <label for="numero">Número</label>

                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        placeholder="Ex: 123"
                        required
                    >


                    <label for="bairro">Bairro</label>

                    <input
                        type="text"
                        id="bairro"
                        name="bairro"
                        placeholder="Digite seu bairro"
                        required
                    >


                    <label for="cidade">Cidade</label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        placeholder="Digite sua cidade"
                        required
                    >


                    <label for="estado">Estado</label>

                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        placeholder="Ex: SP"
                        maxlength="2"
                        required
                    >


                    <label for="cep">CEP</label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        maxlength="9"
                        required
                    >

                </fieldset>


                <button type="submit">
                    Cadastrar
                </button>

            </form>


            <div id="mensagem-cadastro"></div>

        </section>
    `
};