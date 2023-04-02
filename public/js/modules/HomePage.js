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
                    <img src="">

                    <div class="text-box-upcoming">
                        <h3 class="media-title-p">Music Name Goes Here</h3>
                        <p class="author-singer">singers</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="new-videos media-box">
            <h2>Upcoming Movies</h2>

            <div class="media-content-upcoming">
                <div class="each-media-upcoming">
                    <img src="">

                    <div class="text-box-upcoming">
                        <h3 class="media-title-p">Music Name Goes Here</h3>
                        <p class="author-singer">singers</p>
                    </div>
                </div>

                <div class="each-media-upcoming">
                    <img src="">

                    <div class="text-box-upcoming">
                        <h3 class="media-title-p">Music Name Goes Here</h3>
                        <p class="author-singer">singers</p>
                    </div>
                </div>

                <div class="each-media-upcoming">
                    <img src="">

                    <div class="text-box-upcoming">
                        <h3 class="media-title-p">Music Name Goes Here</h3>
                        <p class="author-singer">singers</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
    `,

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