<template>
  <div>
    <div class="flex justify-center my-10">
      <h1 class="sm:text-3xl font-bold uppercase text-green-500 tracking-wider">
        Soccer Stats
      </h1>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th :class="setThClasses()">Form</th>
            <th :class="setThClasses()">GP</th>
            <th :class="setThClasses()">W</th>
            <th :class="setThClasses()">D</th>
            <th :class="setThClasses()">L</th>
            <th :class="setThClasses()">GF</th>
            <th :class="setThClasses()">GA</th>
            <th :class="setThClasses()">GD</th>
            <th :class="setThClasses()">Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in tableData" :key="index">
            <td>{{ addZero(index + 1) }}</td>
            <td>
              <div
                class="flex justify-center items-center w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
              >
                <img :src="team.strTeamBadge" alt="team badge" />
              </div>
            </td>
            <td
              class="text-orange-300"
              :data-tooltip="`LAST UPDATED AT: ${team.dateUpdated}`"
            >
              {{ team.strTeam }}
            </td>

            <td class="min-w-[190px]">
              <span
                v-for="(char, index) in convertString(team.strForm)"
                :key="index"
                :class="getCharClass(char)"
              >
                {{ char }}
              </span>
            </td>
            <td :class="tableCellClasses">{{ team.intPlayed }}</td>
            <td :class="tableCellClasses">{{ team.intWin }}</td>
            <td :class="tableCellClasses">{{ team.intDraw }}</td>
            <td :class="tableCellClasses">{{ team.intLoss }}</td>
            <td :class="tableCellClasses">{{ team.intGoalsFor }}</td>
            <td :class="tableCellClasses">{{ team.intGoalsAgainst }}</td>
            <td :class="tableCellClasses">{{ team.intGoalDifference }}</td>
            <td :class="tableCellClasses">{{ team.intPoints }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { addZero, convertString } from '../helpers';
import { SOCCER_STATS_ENDPOINT } from '../data/constants';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    convertString,
    addZero,
    getCharClass(char) {
      switch (char) {
        case '+':
          return 'rounded-full bg-green-500 w-5 h-5 inline-flex justify-center items-center text-white text-center ml-1';
        case '-':
          return 'rounded-full bg-gray-500 ml-1-500 w-5 h-5 inline-flex justify-center items-center text-white text-center ml-1';
        case 'x':
          return 'rounded-full bg-red-500 w-5 h-5 inline-flex justify-center items-center text-white text-center ml-1';
        default:
          return '';
      }
    },
    setThClasses() {
      return 'font-bold';
    }
  },
  computed: {
    tableCellClasses() {
      return 'hover:text-orange-500 transform hover:translate-y-1 transition-transform duration-300';
    }
  },
  mounted() {
    axios
      .get(SOCCER_STATS_ENDPOINT)
      .then(response => {
        this.tableData = response.data.table;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
