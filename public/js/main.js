// imports always go at the top
import Home from './modules/HomePage.js';
import Music from './modules/MusicPage.js';
// import Lyrics from './modules/MusicLyrics.js';
import Video from './modules/VideoPage.js';
import ErrorPage from './modules/ErrorPage.js';

const { createApp } = Vue; 
// import the createApp method from the Vue library

// createApp({
//     created() {
//         console.log('show the lyrics');
//     },

//     data() {
//         return {
//             showLyrics: false
//         }
//     }
// })

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        // 1 => the vue router will try to match these routes
        // (this is what you put in the location bar in the browser)

        // 2 => when the router finds a match, vue will render the specified component
        // into the router-view tag in index.html
        { 
            path: '/', // browser location bar looks like this
            name: 'home', // name is for programmatic navigation
            component: Home // the component to render
        },

        { 
            path: '/music', // browser location bar looks like this
            name: 'music', // name is for programmatic navigation
            component: Music // the component to render
        },

        // {
        //     path: '/lyrics', // browser location bar looks like this
        //     name: 'lyrics', // name is for programmatic navigation
        //     component: Lyrics // the component to render
        // },

        { 
            path: '/video', // browser location bar looks like this
            name: 'video', // name is for programmatic navigation
            component: Video // the component to render
        },

        // put a catch-all for broken routes at the very bottom of your routes stack
        // if Vue Router can't match a given route, it'll display a generic error component
        {
            path: '/:pathMatch(.*)*', 
            name: 'error', 
            component: ErrorPage 
        }
    ]
})

  // 5. Create and mount the root instance.
    const app = Vue.createApp({
        methods: {
            tryRouterPush() {
                // programmatic routing 
                this.$router.push({
                    name: 'home'
                })
            }
        }
});
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
app.use(router);  
app.mount('#app');

// Search Bar
const toggleSearch = (search, button) => {
    const   searchBar = document.getElementById(search),
            searchButton = document.getElementById(button)

    searchButton.addEventListener('click', () => {
        // Adding the show-search class, the search bar will expand.
        searchBar.classList.toggle('show-search');
    })
}

toggleSearch('search-bar', 'search-button')

// Change Font Size
let btnFont = document.querySelector('.btn-change-fontsize');
let btnEachFont = btnFont.querySelectorAll('.btn-font');

for (var i = 0; i < btnEachFont.length; i++) {
    btnEachFont[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}