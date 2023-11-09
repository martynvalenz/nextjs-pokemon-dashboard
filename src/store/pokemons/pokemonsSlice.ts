import { type SimplePokemon } from '@/pokemons';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

/* 
  {
    favorites:{
      '1':{id:'1', name:'bulbasaur'},
      '3':{id:'3', name:'venusaur'},
    }
  }
 */

interface PokemonState {
  favorites:{[key:string]:SimplePokemon },
}

// const getInitialState = ():PokemonState => {
//   if(typeof localStorage === 'undefined') return {};
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//   return favorites;
// }

const initialState:PokemonState = {
  // ...getInitialState()
  favorites:{}
  // pokemons: {} as PokemonState
  // '1':{id:'1', name:'bulbasaur'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState, 
  reducers: {
    setFavoritePokemons(state, action:PayloadAction<{[key:string]:SimplePokemon }>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;
      if(!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      }
      else{
        state.favorites[id] = pokemon;
      }

      // TODO: No se debe de hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  }
});
 
export const {setFavoritePokemons, toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer