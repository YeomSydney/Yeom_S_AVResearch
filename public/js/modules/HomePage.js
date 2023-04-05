export default {
    template: `
    <section class="home-page">
        <div class="recommendation">
            <div class="recommendation-heading">
                <i class="ri-fire-line"></i><h3>April's Recommendation</h3>
            </div>

            <div class="rec-slider">
                <div class="rec-slides">
                    <router-link class="router-link" to="/music">
                        <div class="rec-slide">
                            <img src="./public/images/music-album-anne-marie.jpg">
                            <div class="song-details">
                                <h3>2002</h3>
                                <p>Anne Marie</p>
                            </div>
                        </div>
                    </router-link>

                    <router-link class="router-link" to="/video">
                        <div class="rec-slide">
                            <img src="./public/images/music-album-anne-marie.jpg">
                            <div class="song-details">
                                <h3>2002</h3>
                                <p>Anne Marie</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="billboard-topchart">
            <div class="billboard-heading">
                <h3>Billboard Topchart 2023</h3>
                
                <div class="slider-buttons">
                    <button class="slider-button" @click="previousSlide">
                        <i class="ri-arrow-left-s-line"></i>
                    </button>
                    
                    <button class="slider-button" @click="nextSlide">
                        <i class="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>

            <div class="slider">
                <div class="slides" :style="{transform: 'translateX(' + position + '%)'}">
                    <div class="each-chart">
                        <img src="./public/images/Jimin-face.jpg">
                        <div class="song-details">
                            <h3>Like Crazy</h3>
                            <p>Jimin</p>
                        </div>
                    </div>

                    <div class="each-chart">
                        <img src="./public/images/morgan-last-night.webp">
                        <div class="song-details">
                            <h3>Last Night</h3>
                            <p>Morgan Wallen</p>
                        </div>
                    </div>

                    <div class="each-chart">
                        <img src="./public/images/die-for-you.jpg">
                        <div class="song-details">
                            <h3>Die for You (Remix)</h3>
                            <p>The Weeknd and Ariana Grande</p>
                        </div>
                    </div>

                    <div class="each-chart">
                        <img src="./public/images/flowers-miley.jpg">
                        <div class="song-details">
                            <h3>Flowers</h3>
                            <p>Miley Cyrus</p>
                        </div>
                    </div>

                    <div class="each-chart">
                        <img src="./public/images/antihero-taylor.jpg">
                        <div class="song-details">
                            <h3>Anti Hero</h3>
                            <p>Taylor Swift</p>
                        </div>
                    </div>

                    <div class="each-chart">
                        <img src="./public/images/all-i-want-for.jpg">
                        <div class="song-details">
                            <h3>All I Want For Chirstmas Is You</h3>
                            <p>Mariah Carey</p>
                        </div>
                    </div>

                    <div class="each-chart">
                        <img src="./public/images/kill-bill.jpeg">
                        <div class="song-details">
                            <h3>Kill Bill</h3>
                            <p>SZA</p>
                        </div>
                    </div>

                    <div class="each-chart">
                        <img src="./public/images/creepin.jpg">
                        <div class="song-details">
                            <h3>Creepin'</h3>
                            <p>Metro Boomin, The Weeknd, 21 Savage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,

    data() {
        return {
            currentSlide: 0,
            slideCount: 4,
            slideWidth: 30,
            position: 0,
        }
    },

    methods: {
        // Recommendation
        previousSlideBtn() {
            this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
            this.position = -this.currentSlide * this.slideWidth;
        },
        
        nextSlideBtn() {
            this.currentSlide = (this.currentSlide + 1) % this.slideCount;
            this.position = -this.currentSlide * this.slideWidth;
        },

        // Billboard - Extra Btn
        previousSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
            this.position = -this.currentSlide * this.slideWidth;
        },
        
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slideCount;
            this.position = -this.currentSlide * this.slideWidth;
        },
    }
}