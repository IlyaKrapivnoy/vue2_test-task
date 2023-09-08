# vue2_test-task

The goal of this exercise is for you to create a component which will fetch an array of items from an
external REST API and display them in a nice list to the user.
The API returns data in JSON format.
```
Link: https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2020-2021
```
You are free to use any method you prefer to mock the REST API and have your component load the
data from the mock API with the sample JSON response.

# Requirements:
1. The app must be make in vue 2.
2. The result list should be responsive and appear without issues in both mobile and desktop
devices.
3. Use custom CSS styling which you think looks good. (don’t use the example image colors).

4. All code needs to be in a code versioned repository of your choice, with detailed commits.
5. All code needs to be well commented.
6. Commit frequently instead of once in the end.

# Nice to have:
1. At the first load the result should shown only 5 items (teams) and a ‘Load more’ button
which loads the next 3 items till the list ends.
2. Use a Skeleton till the page loaded.
3. Just surprise us with a feature what you think is nice (don’t think something big, just an
example hover-over the team name and a tooltiop shows the teamplayers )


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
