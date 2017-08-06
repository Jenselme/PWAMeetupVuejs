<template>
  <div>
    <h1>Add a cat</h1>

    <md-input-container>
        <label>Title</label>
        <md-input placeholder="Title"></md-input>
    </md-input-container>

    <md-input-container>
        <label>Image URL</label>
        <md-input placeholder="Image URL"></md-input>
    </md-input-container>

    <md-button class="md-raised md-primary add-button">
      Save
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  }
}
</script>

<style>
</style>
