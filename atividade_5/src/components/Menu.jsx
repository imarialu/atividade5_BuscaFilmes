import styled from 'styled-components'
import { Link as ButtonLink} from 'react-router-dom'

const Container = styled.div `
    display: flex;
    justify-content: center;
`
const MenuContainer = styled.div `
    display: flex;
    justify-content: center;
    width: 220px;
    padding: 0.4rem;
    margin: 3rem;
    gap: 1rem;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
`

const Button = styled(ButtonLink) `
    width: 100px;
    padding: 0.5rem;
    border: none;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    color: black;
    text-align: center;
    text-decoration: none;
    color: #F23D3D;
    

    &:focus{
        color: #FFFFFF;
        background-color: #F23D3D;
    }
`

function Menu() {
    return(
        <Container>
            <MenuContainer>
                <Button to='/'>Início</Button>
                <Button to='/favoritos'>Favoritos</Button>
            </MenuContainer>
        </Container>
        
    )
}

export default Menu