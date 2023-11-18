<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..."/>
    </header>
    <div class="cards-container">
      <div v-for="quiz in quizzes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} Question</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Quizzes from "./data/quizzes.json";
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

  .card{
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin: 0 20px 35px 0;
    cursor: pointer;
    background-color: white;
  }
  
  .card img{
    width: 100%;
    height: 190px;
    margin: 0;
  }

  .card .card-text{
    padding: 0 0 10px 10px;
    color: black;
  }

  .card .card-text h2{
    font-weight: bold;
  }
</style>