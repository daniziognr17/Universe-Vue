<template>
    <div v-if="!loading && !notFound" id="item">
        <div id="itemCard">
            <div id="itemImg">
                <img :src="this.currentRegister.links[0].href" alt="">
            </div>
            <div id="itemTitle">
                <h1> {{ this.currentRegister.data[0].title }} </h1>
            </div>
            <div id="itemDesc">
                <p v-html="this.currentRegister.data[0].description"> </p>
            </div>
        </div>
    </div>

    <div id="loadingContainer" v-if="!notFound && loading">
        <img src="@/assets/spinner.gif" alt="Wait please...">
    </div>

    <div id="notFound" v-if="notFound">
        Item not found!
    </div>
</template>

<script>
import api from '@/services/api.js';

export default {
    name: 'MyItem',

    data() {
        return {
            nasaId: this.$route.params.nasa_id,
            currentRegister: {},
            loading: true,
            notFound: false
        }
    },

    mounted() {
        this.loading = true;
        api.get('/search?q=' + this.nasaId).then(response => {
            this.loading = false;
            var items = response.data.collection.items;
            var item = items[0];

            if (item == undefined) {
                this.notFound = true;
                return;
            }

            if (item.data[0].media_type == "image" && item.links != null) {
                this.currentRegister = item;
            }
        });
    }
}
</script>

<style scoped>
#item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
}

#itemCard {
    padding: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    width: 50%;
}

#itemImg {
    text-align: center;
}

#itemImg img {
    width: 100%;
}

#itemTitle {
    text-align: center;
    padding: 12px;
}

#itemDesc {
    font-weight: 400;
    text-align: center;
    padding: 12px;
}

#loadingContainer {
    width: 100%;
    text-align: center;
}

#notFound {
    text-align: center;
}
</style>