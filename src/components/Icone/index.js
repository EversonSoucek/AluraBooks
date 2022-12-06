import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const IconeComponente = styled.li`
    margin-right: 40px;
    width: 25px;
`

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`

function Icone() {
    return (
        <IconesContainer>
            {icones.map((icone) => (
                <IconeComponente key={icone}><img alt='icone' src={icone}></img></IconeComponente>
            ))}
        </IconesContainer>
    )
}

export default Icone