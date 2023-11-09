import { type SimplePokemon } from '@/pokemons';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PokemonState {
  [key:string]:SimplePokemon 
}

const getInitialState = ():PokemonState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
  return favorites;
}

const initialState:PokemonState = {
  ...getInitialState()
  // pokemons: {} as PokemonState
  // '1':{id:'1', name:'bulbasaur'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState, 
  reducers: {
    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;
      if(!!state[id]) {
        delete state[id];
        // return;
      }
      else{
        state[id] = pokemon;
      }

      // TODO: No se debe de hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state));
    }
  }
});
 
export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer