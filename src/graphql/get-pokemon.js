import gql from 'graphql-tag';
import Fuse from 'fuse.js'

input SearchPokemonInput {
    name : String
};

export const GET_POKEMON = gql`
  query pokemon($id: name!){
    pokemon(first: $first){
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
