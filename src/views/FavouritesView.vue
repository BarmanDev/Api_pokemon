<template>
  <Header3Component />
  <div>
    <SearchPokemon />
    <h2>Mis Pokémon Favoritos</h2>
    <div class="poke-container">
      <div class="card pokemon grid-poke rounded px-2 py-1" v-for="pokemon in store.favoritos" :key="pokemon.id">
        <div class="card__inner" 
        :class="{ 'is-flipped': pokemon.isFlipped }"
        :style="{ backgroundColor: typeColors[pokemon.type] }">          
          <div class="card__face card__face--front card-front">
            <div><StartsComponent /> </div>
            <div class="number"><span class="number"># {{ pokemon.id.toString().padStart(4, 0) }}</span></div>
            <div class="img-container">
              <img :src="pokemon.image" alt="">
            </div>
            <div class="info">
              <h3 class="name">{{ pokemon.name }}</h3>
              <small class="type">Tipo: {{ pokemon.type }}</small>
              
              <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(pokemon)">Ver</button>
              <button @click="removerDeFavoritos(pokemon)">Remover de favoritos</button>
            </div>
          </div>
          <div class="card__face card__face--back card-back">
            <div class="pokemon">
              <p class="text-primary">Habilidades: </p>
              <p class="ability text-secondary">
                <div v-for="ability in pokemon.ability" :key="ability">{{ ability }}</div></p>
              <p class="text-primary">Características: </p>
             </div>
              <p class="characteristics">
                <div v-for="characteristic in pokemon.characteristics" :key="characteristic">{{ characteristic }}</div></p>                
              <p class="text-primary">Naturaleza: </p>
              <p class="nature">  
                <div v-for="nature in pokemon.nature" :key="nature">{{ nature }}</div></p>
              <p class="text-primary">Estadísticas: </p>
              <p class="stats-container">
                <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat-container m-1">
                  <p>{{ stat.stat.name }}</p>
                  <div class="progress">
                    <div class="progress-bar" :style="{ width: statPercent(stat.base_stat) }"
                        :aria-valuenow="stat.base_stat" aria-valuemin="0" aria-valuemax="200">
                      {{ stat.base_stat }}</div></div></div></p>                

              <button class="btn btn-outline-dark btn-mx-aut d-block px-2" @click="toggleFlip(pokemon)">Volver</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import {useStore} from '../stores/store'
import SearchPokemon from '../components/SearchPokemon.vue';
import StartsComponent from '../components/StartsComponent.vue';
import Header3Component from "./../components/Header3Component.vue";

const store = useStore();

const toggleFlip = (pokemon) => {
  pokemon.isFlipped = !pokemon.isFlipped;
};

const removerDeFavoritos = (pokemon) => {
  store.removerFavorito(pokemon)
}

const statPercent = (baseStat) => `${baseStat / 2}%`

const typeColors = {
  grass: 'rgba(80, 121, 200, 0.6)',
  fire: 'rgba(233, 142, 77, 0.6)',
  water: 'rgba(104, 144, 240, 0.6)',
  bug: 'rgba(168, 184, 32, 0.6)',
  fighting: 'rgba(115, 126, 124, 0.6)',
  water: 'rgba(25, 156, 213, 0.8)',
  grass: 'rgba(67, 244, 244, 0.8)',
  poison: 'rgba(208, 233, 59, 0.8)',
  normal: 'rgba(244, 236, 44, 0.8)',
  ground: 'rgba(131, 97, 227, 0.8)',
  ghost: 'rgba(76, 243, 183, 0.8)',
  rock: 'rgba(54, 16, 161, 0.8)',
  psychic: 'rgba(236, 95, 231, 0.8)',
  electric: 'rgba(236, 169, 39, 0.8)',  
  ice: 'rgba(55, 116, 136, 0.8)',
  steel: 'rgba(55, 136, 116, 0.8)',
  flying: 'rgba(59, 22, 118, 0.8)',
  dark: 'rgba(42, 39, 47, 0.8)',
  fairy: 'rgba(12, 79, 59, 0.8)',
  steel: 'rgba(247, 162, 101, 0.8)',
  dragon: 'rgba(74, 134, 119, 0.8)',
}
</script>

<style lang="scss" scoped>


* {
  margin: 0;
  padding: 0;
}

body {
  background-image: url("./../assets/imagen/prueba2.jpg");
}

.ability {
  position: absolute;
    top: 60px;;
    font-size: 15px;
}

#pagination {
  display: flex;
}

.navigation {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    margin: 0px auto;
}
.navigation .numbers {
    margin-left: 15px;
    margin-right: 15px;
}
.navigation .numbers span button {
    font-size: 20px;
    padding: 0 2px;
    border: 10px;
    color: red;
    cursor: pointer;
}
.navigation .numbers button:hover {
    border-radius: 5px;
    box-shadow: rgba(185, 26, 26, 0.34) 0px 0px 0px 2px;
}
.navigation > button {
    font-size: 20px;
    border: 0;
    cursor: pointer;
    transition: .6s;
    font-weight: 700;
    background-color: #fff;
    border-radius: 10px;
}
.navigation > button:hover {
    transform: scale(1.2);
}
.navigation button {
  font-size: 20px;
  border-radius: 10px;
  width: 40px;
  background-color: rgb(221, 119, 119);
  border: 1px white solid;
}
.poke-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  margin-top: 20px;
}

.card {
  width: 350px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;
}
.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card__inner.is-flipped {
  transform: rotateY(180deg);
}
.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}
.card__face--front {  
  /* display: flex;
  align-items: center;
  justify-content: center;*/
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-evenly; 
  text-align: center; 
}
 
.card__face--front h2 {
  color: #FFF;
}

.card__face--back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: space-evenly; 
  text-align: center; 
}

.card__face--back .number{
  text-align: left;
}

#number-poke{
    position: absolute;
    top: 20px;
    left: 25px;
    font-size: 20px;;
}

.card img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.img-container img {
    width: 100%;
    transition: 1s;
}

img {
  width: 100%;
}

.img-container:hover > img {
    transform: scale(1.3);
}


.stats-container {
  display: flex;
  flex-direction: column;
}

.stat-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
}

.progress {
  width: 100px;
  margin-left: 25px;
  background-color: #ddd;
  border: 1px solid darkgray;
}

.progress-bar {
  height: 18px;
  background-color: #4d4d4d;
  color: white;
  line-height: 20px;
  font-size: 14px;  
}






</style>
