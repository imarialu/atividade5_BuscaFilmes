import styled from 'styled-components'

const Conatiner = styled.div `
    margin-right: 69rem;
`

const TituloContainer = styled.div `
    display: flex:
    flex-direction: colum;  
    margin: 2rem 0;
    border-left: 3px solid #F23D3D;  
`

const Titulo1 = styled.h2 `
    color: black;
    margin: 0;
    padding: 0 1rem;
    font-weight: normal;
`

const Titulo2 = styled.h2 `
    color: #bbbbbbff;
    margin: 0;
    padding: 0 1rem;
    font-weight: normal;
`

function Titulo({titulo1, titulo2}){
    return(
        <Conatiner>
            <TituloContainer>
                <Titulo1>{titulo1}</Titulo1>
                <Titulo2>{titulo2}</Titulo2>
            </TituloContainer>
        </Conatiner>
        
    )
}

export default Titulo