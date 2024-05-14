import MyAbout from '@/components/MyAbout.vue';
import MyGalery from '@/components/MyGalery.vue';
import MyItem from '@/components/MyItem.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyGalery },
        { path: '/:search', component: MyGalery},
        { path: '/item/:nasa_id', component: MyItem },
        { path: '/about', component: MyAbout}
    ]
});

export default router;