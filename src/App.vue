<template>
  <div>
    <div class="flex justify-center my-10">
      <h1 class="text-3xl font-bold uppercase text-green-500 tracking-wider">
        Soccer Stats
      </h1>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>Form</th>
          <th>GP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in tableData" :key="index">
          <td>{{ addZero(index + 1) }}</td>
          <td>
            <img :src="team.strTeamBadge" class="w-[26px]" alt="team badge" />
          </td>
          <td>{{ team.strTeam }}</td>
          <td>{{ team.intPlayed }}</td>
          <td>{{ team.intWin }}</td>
          <td>{{ team.intDraw }}</td>
          <td>{{ team.intLoss }}</td>
        </tr>
      </tbody>
    </table>
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
