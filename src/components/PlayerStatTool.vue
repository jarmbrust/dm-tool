<template>
  <div>
    <h1>player stat tool</h1>
    <div class="row container">
      <div class="ability col-md-6 col-md-offset-1">
        <app-abilities></app-abilities>
      </div>
      <div class="col-md-5">
        <app-race class="race"></app-race>
      </div>
    </div>
  </div>
</template>

<script>
  import Abilities from './playerStats/Abilities.vue'
  import Race from './playerStats/Race.vue'
  import Descriptions from './playerStats/Descriptions.vue'

  export default {
    components: {
      appAbilities: Abilities,
      appRace: Race,
      appDescriptions: Descriptions
    }
  }
</script>

<style scoped>
  body {
    background-color: #222;
  }
  .race {
    float: left;
  }
</style>
