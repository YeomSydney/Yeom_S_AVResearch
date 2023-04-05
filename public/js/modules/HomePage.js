export default {
    template: `
    <section class="media-boxes">
        <section class="now-media media-box">
            <h2>Availables</h2>

            <div class="media-content media-content-availables">
                <router-link class="media-hover" to="/music">
                    <div class="each-media availables-media">
                        <img src="">
                        
                        <div class="text-box">
                            <h3 class="media-title-p">Music Name Goes Here</h3>
                            <p class="author-singer">singers</p>
                        </div>
                    </div>
                </router-link>

                <router-link class="media-hover" to="/video">
                    <div class="each-media availables-media">
                        <img src="">

                        <div class="text-box">
                            <h3 class="media-title-p">Video Name Goes Here</h3>
                            <p class="author-singer">singers</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </section>

        <section class="new-audios media-box">
            <h2>Upcoming Musics</h2>

            <div class="media-content-upcoming">
                <div class="each-media-upcoming">
                </div>
            </div>
        </section>

        <section class="new-videos media-box">
            <h2>Upcoming Movies</h2>

            <div class="media-content-upcoming">
                <div class="each-media-upcoming">
                </div>
            </div>
        </section>
    </section>
    `,

    created() {
        // fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=4&limit=100', options)
        //     .then(response => response.json())
        //     .then(data => {
        //         const Track = data.items;

        //         Track.map((item) => {
        //             // console.log(item)

        //             const thumbnail = item.track.album.images.url;
        //             const trackTitle = item.track.name;
        //             const artist = item.track.artists.name;
        //             const Playlist = 
        //             `<li class="top-music-track">
        //                 <img src="${thumbnail}">
        //                 <h2>${trackTitle}</h2>
        //                 <h3>${artist}</h3>
        //             </li>`
        //             document.querySelector('.each-media-upcoming').innerHTML += Playlist;
        //         })
        //     })
        // .catch(err => console.error(err));
    },

    data: function() {
        return {
        }
    },

    methods: {
        submitData() {
            debugger;
        }
    }
}

// Fetching
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd66fcf92e0mshd306243da2a84f1p185adajsn6d81fb446ed8',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};