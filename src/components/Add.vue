<template>
  <div>
    <h1>Add a cat</h1>

    <md-input-container>
        <label>Title</label>
        <md-input placeholder="Title" v-model="title"></md-input>
    </md-input-container>

    <md-input-container>
        <label>Image URL</label>
        <md-input placeholder="Image URL" v-model="url"></md-input>
    </md-input-container>

    <md-button class="md-raised md-primary"
               :disabled="!title || !url"
               v-on:click="pushCat()">
      Save
    </md-button>
  </div>
</template>

<script>
import { db } from '../database'

export default {
  name: 'hello',
  data () {
    return {
      title: undefined,
      url: undefined
    }
  },
  methods: {
    pushCat () {
      this.$firebaseRefs.cats.push({
        url: this.url,
        title: this.title
      })
      this.$router.push('/')
    }
  },
  firebase: {
    cats: {
      source: db.ref('pictures')
    }
  }
}
</script>

<style>
</style>
