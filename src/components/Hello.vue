<template>
  <div class="hello">
    <img src="https://25.media.tumblr.com/tumblr_m40h4ksiUa1qbyxr0o1_400.gif"/>
    <md-card v-for="(picture, key) in cats" v-bind:key="picture.id">
      <md-card-media>
        <img v-bind:src="picture.url" alt="A cat">
      </md-card-media>
    </md-card>
  </div>
</template>

<script>
import { db } from '../database'

export default {
  name: 'hello',
  data () {
    return {
    }
  },
  firebase: {
    cats: {
      source: db.ref('pictures')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
