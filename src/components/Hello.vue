<template>
  <div class="hello">
    <md-button class="md-raised md-primary add-button">
      <router-link class="md-button" to="add">Add</router-link>
    </md-button>

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
          this.registerPushNotifications()
        })
      }
    },
    registerPushNotifications () {
      if ('Notification' in window) {
        this.$firebaseRefs.cats.on('child_added', function (snap) {
          Notification.requestPermission().then(function (result) {
            if (result === 'granted') {
              const notif = new Notification('New cat', {
                body: snap.val().title,
                tag: null
              })
              setTimeout(() => notif.close(), 5000)
            }
          })
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

.add-button {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
