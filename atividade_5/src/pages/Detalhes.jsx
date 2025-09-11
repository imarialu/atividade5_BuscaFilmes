import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'

const PaginaDetlhes = styled.main `
    display: flex;
    justify-content: center;
`

const Container = styled.div `
    width: 900px;
    height: 500px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 5rem;
`

const PosterContainer = styled.div `
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Poster = styled.img `
    height: 400px;
    margin-rigth: 3rem;
`

const InfoContainer = styled.div `
    display: flex;
    flex-direction: column;
`

const InfoRow = styled.div `
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

const Genre = styled.p `
    margin-top: 3rem;
    margin-bottom: 0.8rem;
    color: #F23D3D;
    font-weight: 450;
`

const Year = styled.p `
    font-weight: 450;
`

const Runtime = styled.p `
    font-weight: 450;
`

const Bolinha = styled.p `
    color: #F23D3D;
`

const StrongD = styled.strong `
    color: #F23D3D;
    margin-top: 0.8rem;
`

const Director = styled.p `
    margin-top: 0.2rem;
    font-weight: 450;
`

const StrongA = styled.strong `
    color: #F23D3D;
    margin-top: 0.8rem;
`

const Actors = styled.p `
    margin-top: 0.2rem;
    font-weight: 450;
`

const Plot = styled.p `
    width: 400px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem; 
    font-weight: 450;
`

const Loading = styled.p `
    text-align: center;

`

function Detalhes(){
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=47e2609c&i=${id}`)
        .then(resp => {
            setFilme(resp.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    });

    if(loading){
        return (
            <Loading>Carregando...</Loading>
        )
    }

    return(
        <PaginaDetlhes>
            <Container>
                <PosterContainer>
                    <Poster src={filme.Poster} alt="Poster do filme" />
                </PosterContainer>

                <InfoContainer>
                    <Genre>{filme.Genre.trim().split(',').join(' | ')}</Genre>

                    <h1>{filme.Title}</h1>
                    
                    <InfoRow>
                        <Year>{filme.Year}</Year>
                        <Bolinha>•</Bolinha>
                        <Runtime>{filme.Runtime}</Runtime>
                    </InfoRow>

                    <Plot>{filme.Plot}</Plot>

                    <StrongD>DIREÇÃO</StrongD>
                    <Director>{filme.Director}</Director>
                    <StrongA>ATORES</StrongA>
                    <Actors>{filme.Actors}</Actors>
                    
                </InfoContainer>
            </Container> 
        </PaginaDetlhes>
    )
}

export default Detalhes;