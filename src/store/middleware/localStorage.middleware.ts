import { MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit";
import { RootState } from "..";

// export const localStorageMiddleware = (store:MiddlewareAPI) => (next) => (action) => {
//   const result = next(action);
//   const {pokemons} = store.getState();
//   localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
//   return result;
// }

export const localStorageMiddleware = (state:MiddlewareAPI) => {
  return (next:Dispatch) => (action:Action) => {
    next(action);
    if(action.type === 'pokemons/toggleFavorite') {
      const {pokemons} = state.getState() as RootState;
      localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
      return;
    }
  }
}