import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id,
      name,
      height,
      image,
      maxHP,
      maxCP,
      types,
      attacks {
        special{
          name
          damage
        }
      }
    }
  }
`;