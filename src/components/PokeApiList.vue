<template>
    <div>
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon">
            <h3>{{  pokemon.name }}</h3>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const { pokemons, colors } = defineProps(['pokemons', 'colors']);

</script>

<style lang="scss" scoped>
</style>