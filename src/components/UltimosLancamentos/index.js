import { livros } from "../Pesquisa/dadosPesquisa"
import { Titulo } from "../Titulo"
import imagemLivro from "../../img/livro2.png"
import styled from "styled-components"
import CardRecomenda from "../CardRecomenda"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#EB9B00' tamanhoFonte='36px'>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img alt='livros' src={livro.src}></img>
                )
                )}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo='Talvez você se interesse por...'
                subtitulo='Angular 11'
                texto="Construindo uma aplicação com google."
                imagem={imagemLivro} />
        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos