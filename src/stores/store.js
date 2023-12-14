import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'pokedex',
  state: () => ({
    favoritos: []
  }),
  actions: {
    agregarFavorito(pokemon) {
      if (!this.favoritos.find(fav => fav.id === pokemon.id)) {
        this.favoritos.push(pokemon)
      }
    },
    removerFavorito(pokemon) {
      this.favoritos = this.favoritos.filter(fav => fav.id !== pokemon.id)
    }
  }
})
