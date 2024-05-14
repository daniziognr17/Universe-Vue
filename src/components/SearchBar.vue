<template>
    <div id="searchBar">
        <div id="searchInputContainer">
            <input v-model="search" id="searchInput" placeholder="Search anything, ex.: Andromeda" />
        </div>

        <div id="searchButtonContainer">
            <button v-on:click="loadNewSearch()" id="searchButton"> Search </button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'SearchBar',

    data() {
        return {
            search: ''
        }
    },

    methods: {
        loadNewSearch() {
            this.$router.push(
                {
                    path: '/' + this.search,
                }
            );
            this.search = '';
        }
    }
}

</script>

<style scoped>
#searchBar {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}

#searchInputContainer {
    padding: 12px;
}

#searchInput {
    height: 32px;
    width: 240px;
    padding: 12px;
}

#searchButtonContainer {
    padding: 12px;
}

#searchButton {
    height: 32px;
    width: 60px;
    background-color: var(--btn-primary);
    color: white;
    border: none;
    cursor: pointer;
}

#searchButton:hover {
    background-color: var(--btn-primary-hover);
}
</style>