import React from 'react'
import Search from './Search';
import { PokemonsContainer } from "../containers/PokemonContainer"
export default function HomePage() {
const getPokemon = (query) => {


}
    return(
        <div>
            <Search getPokemon={getPokemon}/> 
            <PokemonsContainer/>
        </div>
    )
}