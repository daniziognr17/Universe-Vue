<template>

    <div v-if="!loading" id="MyGalery">
        <div v-for="(register, index) in registers" :key="index" id="GaleryItem">
            <img :src="register.links[0].href" alt="">
            <div id="imgTitle"> {{ register.data[0].title }}</div>
            <div id="imgDescription" v-html="register.data[0].description"></div>
            <button id="btnMore">See More</button>
        </div>
    </div>

    <div id="loadingContainer" v-else>
        <img src="@/assets/spinner.gif" alt="Wait please...">
    </div>
</template>

<script>

import api from '@/services/api.js';

export default {
    name: 'MyGalery',

    data() {
        return {
            registers: [],
            loading: true
        }
    },

    mounted() {
        this.getData('centauri');
    },

    props: [
        'searchValue'
    ],

    watch: {
        searchValue: function (value) {
            this.getData(value);
        }
    },

    methods: {
        getData(value) {
            if (value == '') {
                value = 'Andromeda';
            }

            this.loading = true;
            api.get('/search?q=' + value).then(response => {
                this.loading = false;
                this.registers = [];
                var items = response.data.collection.items;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].data[0].media_type == "image" && items[i].links != null) {
                        var currentDescription = items[i].data[0].description;
                        var nextDescription = currentDescription.substring(0, 320);

                        if (currentDescription.length > 300) {
                            nextDescription += '...';
                        }

                        items[i].data[0].description = nextDescription;

                        var currentTitle = items[i].data[0].title;
                        var nextTitle = currentTitle.substring(0, 50);

                        if (currentTitle.length > 50) {
                            nextTitle += '...';
                        }

                        items[i].data[0].title = nextTitle;

                        this.registers.push(items[i])
                    }
                }
            })
        }
    }
}

</script>

<style scoped>
#MyGalery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#GaleryItem {
    width: 360px;
    margin: 1em;
    border: 1px solid grey;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

#GaleryItem img {
    width: 100%;
    height: 200px;
}

#imgTitle {
    height: 60px;
    font-size: 20px;
    padding: 12px 4px 4px 4px;
    text-align: center;
}

#imgDescription {
    padding: 12px 12px 12px 12px;
    font-size: 12px;
    text-align: justify;
    height: 128px;
}

#loadingContainer {
    width: 100%;
    text-align: center;
}

#btnMore {
    width: 100%;
    padding: 8px;
    border: none;
    background-color: var(--btn-primary);
    color: white;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
}

#btnMore:hover {
background-color: var(--btn-primary-hover)
}
</style>