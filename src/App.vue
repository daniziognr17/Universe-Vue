<template>
  <div id="App">
    <MyHeader />
    <SearchBar @changeSearch="updateSearch"/>
    <MyGalery :searchValue="searchValue"/>
  </div>
</template>

<script>

import './styles/global.css';
import MyHeader from './components/MyHeader';
import SearchBar from './components/SearchBar';
import MyGalery from './components/MyGalery';

export default {
  name: 'App',

  components: {
    MyHeader,
    SearchBar,
    MyGalery
  },

  data() {
    return {
      searchValue: ''
    }
  },

  methods: {
    updateSearch (value) {
      this.searchValue = value
    }
  }
}

</script>