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
            <th>Form</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
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
            <td class="text-orange-300">{{ team.strTeam }}</td>
            <td :class="tableCellClasses">Coming soon...</td>
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
import { addZero } from '../helpers';
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
    addZero
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
