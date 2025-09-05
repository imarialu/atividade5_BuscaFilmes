import { useState } from "react";
import styled from 'styled-components'
import axios from 'axios'
import Titulo from "../components/Titulo";
import CardFilmes from "../components/CardFilmes";

const PaginaPrincipal = styled.main `
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

const Form = styled.form `
    display: flex;
    justify-content: center;
    width: 600px;
    gap: 1rem;
    margin: 1rem 0 5rem;
`

const InputBuscar = styled.input `
    width: 500px;
    padding: 0.8rem;
    border: none;
    border-radius: 20px;
    background-color: #f5f3f3ff;
    
    &:focus {
        outline: none;
    }
`

const ButtonBuscar = styled.button `
    width: 90px;
    border: none;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #F23D3D;
`

const Mensagem = styled.p `
    text-align: start;
    width: 500px;
`

function Home(){
    const [formData, setFormData] = useState({
        name: ''
    });
    const [filmes, setFilmes] = useState([]);
    const [pesquisa, setPesquisa] = useState(true);

    const handleChange = (e) => {
        setFormData({
            [e.target.name]: e.target.value
        });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.get(`http://www.omdbapi.com/?apikey=47e2609c&s=${formData.name}`)
        .then(resp => {
            setFilmes(resp.data.Search);
            setPesquisa(false);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <PaginaPrincipal>
            <Form onSubmit={submit}>
                <InputBuscar type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Busque pelo filme..."/>
                <ButtonBuscar type="submit">Buscar</ButtonBuscar>
            </Form>
            
            <Titulo titulo1='FILMES' titulo2='ENCONTRADOS'/>

            <FilmesContainer>
                <FilmesGrid> 
                    {pesquisa ? (
                        <Mensagem>Você ainda não pesquisou por nenhum filme...</Mensagem>
                    ) : (
                        filmes.map((filme) => (
                            <CardFilmes key={filme.imdbID} filme={filme}/>
                        ))
                    )}
                </FilmesGrid>
            </FilmesContainer>
        </PaginaPrincipal>
    )
}

export default Home;