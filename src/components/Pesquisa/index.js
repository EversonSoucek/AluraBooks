import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    heigth: 270px;
    width 100%;

`

const Titulo = styled.h2`
 
    color; #FFF;
    font-size: 3 6px;
    text-align:center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weigth; 500;
    margin-botton; 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>encontre seu livro em nossa estante</SubTitulo>
            <Input placeholder='Escreva sua proxima leitura' onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }} />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <p key={livro.nome}>{livro.nome}</p>
                    <img key={livro.src} src={livro.src} />
                </Resultado>
            )
            )}
        </PesquisaContainer>
    )
}
export default Pesquisa