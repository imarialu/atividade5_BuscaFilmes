import { useState, useEffect } from "react";
import CardFilmesFav from "../components/CardFilmesFav";
import styled from "styled-components";
import Titulo from "../components/Titulo";

const PaginaFavoritos = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FilmesContainer = styled.div `
    width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
`

const FilmesGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
    text-align: center;
`

const Loading = styled.p `
    text-align: center;

`

function Favoritos(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reloading, setReloading] = useState(false);

    useEffect (() => {
        let filmesSalvos = JSON.parse(localStorage.getItem("filmesFavotitos"));
        setFilmes(filmesSalvos);
        setLoading(false)
    }, [reloading])

    if(loading){
        return (
            <Loading>Carregando...</Loading>
        )
    }

    return(
        <PaginaFavoritos>
            <Titulo titulo1='FILMES' titulo2='FAVORITADOS'/>

            <FilmesContainer>
                <FilmesGrid> 
                    {filmes.map((filme) => (
                        <CardFilmesFav key={filme.imdbID} filme={filme} onReloading={() => setReloading(!reloading)}/>
                    ))}
                </FilmesGrid>
            </FilmesContainer>
        </PaginaFavoritos>
    )
}

export default Favoritos;