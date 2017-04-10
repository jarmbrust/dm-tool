<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Ability</th>
          <th>Total</th>
          <th>Bonus</th>
          <th>Score</th>
          <th>Race<br />Bonus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ability, index) in abilities">
          <td class="stat-name"> {{ index }} </td>
          <td class="total-score"> {{ Number(ability) + Number(raceBonus[index]) }} </td>
          <td class="stat-bonus"> {{ Math.floor(((Number(ability) + Number(raceBonus[index])) - 10)/2) }} </td>
          <td class="score"> {{ ability }} </td>
          <td class="race-bonus"> {{ raceBonus[index] }} </td>
          <td v-if="adjustAbility">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adjust <span class="caret"></span></button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <option v-for="(cost, value) in abilityCost" class="dropdown-item" @click="ability = selected(value, index)">{{ value }} : (Cost: {{ cost }})</option>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div><span class="points-text">Points:</span> <span class="total-points" :class="{ 'negative-pts': belowZero }">{{ points }} </span>
      <button class="btn btn-primary reset" type="button" @click="resetStats">Reset Stats</button>
      <div class="race"> {{ race }} </div>
      <app-race class="race-button"></app-race>
    </div>
  </div>
</template>

<script>
  import Race from './Race.vue'

  export default {
    data () {
      return {
        abilities: {
          'Str': 8,
          'Dex': 8,
          'Con': 8,
          'Int': 8,
          'Wis': 8,
          'Chr': 8
        },
        points: 27,
        abilityCost: {
          8: 0,
          9: 1,
          10: 2,
          11: 3,
          12: 4,
          13: 5,
          14: 7,
          15: 9
        },
        adjustAbility: true
      }
    },
    methods: {
      selected (value, index) {
        this.adjustPoints(value, index)
        this.abilities[index] = value
      },
      adjustPoints (value, index) {
        let currentValue = this.abilityCost[this.abilities[index]]
        let valueAdj = this.abilityCost[value]
        this.points += currentValue - valueAdj
      },
      resetStats () {
        for (let key in this.abilities) {
          this.abilities[key] = 8
        }
        this.points = 27
      }
    },
    computed: {
      race () {
        return this.$store.getters.selectedRace
      },
      raceBonus () {
        return this.$store.getters.raceBonusArray
      },
      belowZero () {
        return this.points < 0
      }
    },
    components: {
      appRace: Race
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
  .points-text {
    padding: 10px;
    font-size: 18px;
    float: left;
    color: #EEE;
  }
  .reset {
    margin: 5px;
    margin-left: 15px;
    float: left;
  }
  .race-button {
    float: left;
  }
  .total-score {
    font-weight: bold;
    font-size: 22px;
    padding: 10px;
    color: #EEE;
  }
  .total-points  {
    font-weight: bold;
    font-size: 26px;
    padding: 5px;
    color: #EEE;
    float: left;
  }
  .race,
  .stat-bonus {
    font-weight: bold;
    font-size: 18px;
    padding: 12px;
    color: #EEE;
  }
  .stat-name {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #EEE;
  }
  .negative-pts {
    color: red;
  }
  .score,
  .race-bonus,
  .table th {
    color: #EEE;
    padding-top: 14px;
    text-align: center;
  }
  .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background-color: #333;
  }
</style>
