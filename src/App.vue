<template>
  <main class="p-0 my-6">
    <title-view :title="`Soccer Stats`" />
    <section class="overflow-x-auto">
      <table-view :tableData="displayedTableData" :isBusy="isBusy" />
      <reusable-button
        :isBusy="isBusy"
        :showLoadMoreButton="displayedTableData.length < tableData.length"
        :buttonText="`Load more`"
        @loadMore="loadMore"
      />
    </section>
  </main>
</template>

<script>
import TitleView from '@/components/TitleView.vue';
import ReusableButton from '@/components/ReusableButton.vue';
import TableView from '@/components/TableView.vue';
import api from '../services/api';

export default {
  name: 'App',
  components: { ReusableButton, TitleView, TableView },
  data() {
    return {
      // initial table data
      tableData: [],
      // track the number of displayed rows (initially) and additional rows to load
      initialRowCount: 5,
      rowsToAdd: 3,
      // store all displayed rows in here
      displayedTableData: [],
      // show btn loader
      isBusy: false
    };
  },
  methods: {
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
    },
    loadMore() {
      // show btn loader
      this.isBusy = true;
      // I've added a delay for you to see this loader on Load more btn
      setTimeout(() => {
        const currentRowCount = this.displayedTableData.length;
        const newRowCount = currentRowCount + this.rowsToAdd;
        this.displayedTableData = this.tableData.slice(0, newRowCount);
      }, 1000);

      setTimeout(() => {
        // Set back to false after the delay
        this.isBusy = false;
        // Adjust the delay time as needed (in milliseconds)
      }, 1000);
    }
  },
  computed: {
    // add to reduce amount of repeated code
    tableCellClasses() {
      return 'hover:text-orange-500 transform hover:translate-y-1 transition-transform duration-300';
    }
  },
  mounted() {
    // getting data from given API, using axios instance
    api
      // make endpoint a variable to reduce possibility of typos
      .get('/api/v1/json/3/lookuptable.php?l=4328&s=2020-2021')
      .then(response => {
        this.tableData = response.data.table;
        // Initially, display the first 'initialRowCount' rows
        this.displayedTableData = this.tableData.slice(0, this.initialRowCount);
      })
      // display an error to console
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
