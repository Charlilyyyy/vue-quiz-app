<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..."/>
    </header>
    <div class="cards-container">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz"/>
      <!-- <div v-for="quiz in quizzes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} Question</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import Quizzes from "./data/quizzes.json";
import Card from "./components/Card.vue";

import { ref,watch } from "vue";

const quizzes = ref(Quizzes)
const search = ref("")

watch(search, () => {
  quizzes.value = Quizzes.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<style scoped>
  .container{
    max-width: 1000px;
    margin: 0 auto;
  }

  header{
    margin: 30px 0 10px 0;
    display: flex;
    align-items: center;
  }

  header h1{
    font-weight: bold;
    margin-right: 30px;
  }

  header input{
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 10px;
  }

  .cards-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /*CARD*/

  
</style>