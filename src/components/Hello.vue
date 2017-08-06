<template>
  <div class="hello">
    <md-card v-for="(picture, key) in getCats()" v-bind:key="picture.id">
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
      getCats () {
        if (navigator.onLine) {
          return this.cats
        }

        return JSON.parse(localStorage.getItem('cats'))
      }
    }
  },
  methods: {
    saveCatsToCache () {
      if (navigator.onLine) {
        this.$firebaseRefs.cats.once('value', snapshot => {
          localStorage.setItem('cats', JSON.stringify(snapshot.val()))
        })
      }
    }
  },
  firebase: {
    cats: {
      source: db.ref('pictures')
    }
  },
  mounted () {
    this.saveCatsToCache()
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
