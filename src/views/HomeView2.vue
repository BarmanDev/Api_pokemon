<script setup>
import { ref } from "vue";
import Pagination from "../components/Pagination.vue"
import Header1Component from "./../components/Header1Component.vue"

</script>

<template>
    <Header1Component />

    <div>
        
        <Pagination />


    </div>



</template>


<style>

body {
  background-image: url(./../assets/imagen/photo1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>