<template>
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
          :data-tooltip="`LAST UPDATE: ${team.dateUpdated}`"
        >
          {{ displayField(team.strTeam) }}
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
        <!-- Conditionally display loading dots when isBusy is true -->
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intPlayed) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intWin) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intDraw) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intLoss) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intGoalsFor) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intGoalsAgainst) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intGoalDifference) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
        <td :class="[tableCellClasses, isBusy ? 'loading-cell' : '']">
          <div v-if="!isBusy">{{ displayField(team.intPoints) }}</div>
          <div v-else>
            <div class="loading-dots">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="dot dot-3"></div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { addZero, convertString } from '../../helpers';

export default {
  props: {
    tableData: Array,
    isBusy: Boolean
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
    },
    displayField(value) {
      return value || 'Coming soon...';
    }
  },
  computed: {
    tableCellClasses() {
      return this.isBusy
        ? 'hover:cursor-not-allowed'
        : 'hover:text-orange-500 transform hover:translate-y-1 transition-transform duration-300';
    }
  }
};
</script>

<style scoped>
.loading-dots {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 4px;
  height: 4px;
  background-color: rgba(67, 59, 229, 0.5);
  border-radius: 50%;
  margin: 0 2px;
}

.dot-1 {
  animation: dot-jump 1s infinite;
}

.dot-2 {
  animation: dot-jump 1s infinite;
  animation-delay: 0.2s;
}

.dot-3 {
  animation: dot-jump 1s infinite;
  animation-delay: 0.4s;
}

@keyframes dot-jump {
  0%,
  50%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(-5px);
  }
}
</style>
