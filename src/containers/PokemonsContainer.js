import React from 'react'   
import {useQuery} from "@apollo/react-hooks"
import { GET_POKEMONS } from '../graphql/get-pokemons';
import {Pokemon} from "../components/Pokemon"

export const PokemonsContainer = () => {
    const { data: { pokemons = [] } = { } } = useQuery(GET_POKEMONS, {
        variables: {first: 200 }, 
    });

    return (
        <div className="container"> 
       
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon = {pokemon}/>)}
        </div>
    )

}


