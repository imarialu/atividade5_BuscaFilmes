import styled from 'styled-components'

const Card = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 220px;
    background-color: #ffffff;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
`

const Poster = styled.img `
    width: 190px;
    height: 250px;
    padding: 10px;
    margin-top: 0.7rem;
`

const Title = styled.p `
    width: 170px;
    margin-top: 0.3rem;
    margin-bottom: 0;
    text-align: start;
    font-weight: 500;
`

const Year = styled.p `
    margin: 0.2rem;
    width: 170px;
    text-align: start;
    color: #F23D3D;
    font-weight: 500;
`

const ButtonRemover = styled.button `
    margin: 0.9rem;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 3rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
    border: 1px solid #F23D3D;
    color: #F23D3D;
    background-color: white;

    &:hover {
        color: white;
        background-color: #F23D3D;
    }
`

function CardFilmesFav ({filme, onReloading}) {
    const removerFav = (filme) => {
        let filmesSalvos = JSON.parse(localStorage.getItem("filmesFavotitos")) || [];

        if(!Array.isArray(filmesSalvos)){
            filmesSalvos = [filmesSalvos];
        }

        let remover = filmesSalvos.filter(f => f.imdbID != filme.imdbID);

        localStorage.setItem("filmesFavotitos", JSON.stringify(remover));        

        onReloading();
    }

    return (
        <Card>
            <Poster src={filme.Poster}/>
            <Title>{filme.Title}</Title>
            <Year>{filme.Year}</Year>
            <ButtonRemover onClick={() => removerFav(filme)}>Remover</ButtonRemover>
        </Card>
    )
}

export default CardFilmesFav