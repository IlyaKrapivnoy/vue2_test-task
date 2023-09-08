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
            <td>{{ team.strTeam }}</td>
            <td>Coming soon...</td>
            <td>{{ team.intPlayed }}</td>
            <td>{{ team.intWin }}</td>
            <td>{{ team.intDraw }}</td>
            <td>{{ team.intLoss }}</td>
            <td>{{ team.intGoalsFor }}</td>
            <td>{{ team.intGoalsAgainst }}</td>
            <td>{{ team.intGoalDifference }}</td>
            <td>{{ team.intPoints }}</td>
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
