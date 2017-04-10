<template>
  <div class="dropdown btn-group race-button">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">Race <span class="caret"></span></button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <option v-for="race in races" class="dropdown-item" @click="selectRace(race)"> {{ race }}</option>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        races: [
          'Human', 'Wood Elf', 'Hill Dwarf', 'Rock Gnome', 'Skeech', 'Minotaur', 'Sithra', 'Tiefling'
        ],
        raceBonus: {
          'Default': {'Str': 0, 'Dex': 0, 'Con': 0, 'Int': 0, 'Wis': 0, 'Chr': 0},
          'Human': {'Str': 1, 'Dex': 1, 'Con': 1, 'Int': 1, 'Wis': 1, 'Chr': 1},
          'Wood Elf': {'Str': 0, 'Dex': 2, 'Con': 0, 'Int': 0, 'Wis': 1, 'Chr': 0},
          'Hill Dwarf': {'Str': 0, 'Dex': 0, 'Con': 2, 'Int': 0, 'Wis': 1, 'Chr': 0},
          'Rock Gnome': {'Str': 0, 'Dex': 0, 'Con': 1, 'Int': 2, 'Wis': 0, 'Chr': 0},
          'Skeech': {'Str': 0, 'Dex': 2, 'Con': 0, 'Int': 1, 'Wis': 0, 'Chr': 0},
          'Tiefling': {'Str': 0, 'Dex': 0, 'Con': 0, 'Int': 1, 'Wis': 0, 'Chr': 2},
          'Minotaur': {'Str': 2, 'Dex': 0, 'Con': 1, 'Int': 0, 'Wis': 0, 'Chr': 0},
          'Sithra': {'Str': 0, 'Dex': 0, 'Con': 2, 'Int': 0, 'Wis': 0, 'Chr': 1}
        },
        selectedRace: 'Default'
      }
    },
    methods: {
      selectRace (race) {
        this.selectedRace = race
        let bonusArray = this.raceBonus[this.selectedRace] ? this.raceBonus[this.selectedRace] : this.raceBonus['Default']
        this.$store.dispatch('selectRace', this.selectedRace)
        this.$store.commit({
          type: 'SET_RACE',
          race: this.selectedRace
        })
        this.$store.commit({
          type: 'SET_BONUS_ARRAY',
          bonusArray: bonusArray
        })
      }
    }
  }
</script>

<style scoped>
  .dropdown-item {
    padding-left: 10px;
    cursor: pointer;
  }
  .dropdown-item:hover {
    background-color: #ccc;
  }
  .race-button {
    margin: 20px;
  }
  .btn-group {
    clear: both;
  }
</style>
