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
    <div class="points-text">Points: <span class="total-points">{{ points }} </span>
      <button class="btn btn-primary reset" type="button" @click="resetStats">Reset Stats</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

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
        raceBonus: {
          'Str': 0,
          'Dex': 0,
          'Con': 0,
          'Int': 0,
          'Wis': 0,
          'Chr': 0
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
        adjustAbility: true,
        race: ''
      }
    },
    methods: {
      ...mapActions([
        'selectedRace'
      ]),
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
        for (var key in this.abilities) {
          this.abilities[key] = 8
        }
        this.points = 27
        this.race = this.selectedRace()
        console.log('test', this.race)
      },
      selectedRace () {
//        this.race = this.selectedRace()
        console.log('test', this.race)
      }
    }
//    computed: {
//      getRaceBonus () {
//        this.raceBonus = this.$store.getRaceBonuses()
//        console.log('>>', this.raceBonus)
//      }
//    },
//    computed: {
//      getRaceBonus () {
//        this.raceBonus = this.$store.getRaceBonuses()
//        this.$store.watch()
//
//        console.log('>>', this.raceBonus)
//      },
//      getRace () {
//        this.race = this.$store.selectedRace()
//        console.log('>>> ', this.race)
//      }
//    }
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
    margin: 2px;
  }
  .selected-race {
    padding: 10px;
    margin: 10px;
    font-size: 18px;
    color: #EEE;
  }
  .total-score,
  .total-points  {
    font-weight: bold;
    font-size: 22px;
    padding: 10px;
    color: #EEE;
  }
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
