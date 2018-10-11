<template>
  <div uk-grid class="uk-child-width-1-3 blog__items">
    <div v-for="blog in blogs" >
      <img :src="blog.img" alt="Image">
      <h5>{{blog.title}}</h5>
      <p>{{blog.author}}</p>
      <img src="img/Layer_12.png" alt="">
      <p>{{blog.content}}</p>
      <p><a href="">Read more</a></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "blog"
    }
</script>

<style scoped>

</style>
