<template>
  <div id="App">
    <MyHeader />
    <SearchBar />
    <router-view></router-view>
  </div>
</template>

<script>

import './styles/global.css';
import MyHeader from './components/MyHeader';
import SearchBar from './components/SearchBar';

export default {
  name: 'App',

  components: {
    MyHeader,
    SearchBar,
  },

  data() {
    return {
      searchValue: '',
    }
  },
}

</script>