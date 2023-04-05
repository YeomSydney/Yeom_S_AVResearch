export default {
    template: `
    <section class="music-page">
        <div class="music-details">
            <div class="album">
                <img src="./public/images/music-album-anne-marie.jpg">

                <div class="controller">
                    <div class="song-info">
                        <h3>2002</h3>
                        <h4>Speak Your Mind</h4>
                        <h5>Anne Marie</h5>
                    </div>

                    <div class="btn-lyrics">
                        <button @click="showLyrics = !showLyrics">Lyrics</button>
                    </div>
                </div>
            </div>

            <div class="current-album-songs">
                <div class="current-album-details">
                    <div class="album-title">
                        <h3>Speak Your Mind</h3>
                        <p>Anne Marie • 2018 • 12 Songs</p>
                    </div>

                    <div class="music-lists">
                        <ul>
                            <li class="selected" @click="play">
                                <span>1. 2002 <i class="ri-bar-chart-fill"></i></span><span>3:14</span>
                            </li>

                            <li>
                                <span>2. Alarm</span><span>3:26</span>
                            </li>

                            <li>
                                <span>3. FRIENDS</span><span>3:23</span>
                            </li>

                            <li>
                                <span>4. Cry</span><span>4:32</span>
                            </li>

                            <li>
                                <span>5. Ciao Adios</span><span>3:20</span>
                            </li>

                            <li>
                                <span>6. Machine</span><span>4:08</span>
                            </li>

                            <li>
                                <span>7. Then</span><span>3:35</span>
                            </li>

                            <li>
                                <span>8. Can I Get Your Number</span><span>3:20</span>
                            </li>

                            <li>
                                <span>9. Trigger</span><span>3:14</span>
                            </li>

                            <li>
                                <span>10. Heavy</span><span>2:53</span>
                            </li>

                            <li>
                                <span>11. Perfect</span><span>3:54</span>
                            </li>

                            <li>
                                <span>12. Bad Girlfriend</span><span>3:26</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div v-show="showLyrics" class="show-lyrics" id="lyrics-box-lightbox">
                    <div class="lyrics-heading">
                        <div class="song-title">
                            <h3>2002</h3>
                            <p>Dance/Electronic, Pop</p>
                        </div>

                        <div class="btn-change-fontsize">
                            <button class="btn-font" data-fontsize="1" :class="{ active: fontSize === '1rem' }" @click="setFontSize('1')">
                                <span>Default</span>
                            </button>

                            <button class="btn-font" data-fontsize="1.3" :class="{ active: fontSize === '1.3rem' }" @click="setFontSize('1.3')">
                                <span>Medium</span>
                            </button>

                            <button class="btn-font" data-fontsize="1.7" :class="{ active: fontSize === '1.7rem' }" @click="setFontSize('1.7')">
                                <span>Large</span>
                            </button>
                        </div>
                    </div>

                    <div class="lyrics-box">
                        <div class="lyrics-content">
                            <p :style="{ fontSize: fontSize }">
                                I will always remember<br>
                                The day you kissed my lips<br>
                                Light as a feather<br>
                                And it went just like this<br>
                                No, it's never been better<br>
                                Than the summer of 2002 (ooh)<br>
                                Uh, we were only eleven<br>
                                But acting like grown-ups<br>
                                Like we are in the present<br>
                                Drinking from plastic cups<br>
                                Singing, "Love is forever and ever"<br>
                                Well, I guess that was true<br>
                                Dancing on the hood in the middle of the woods<br>
                                On an old Mustang, where we sang<br>
                                Songs with all our childhood friends<br>
                                And it went like this, say<br>
                                Oops, I got 99 problems singing bye, bye, bye<br>
                                Hold up, if you wanna go and take a ride with me<br>
                                Better hit me, baby, one more time, uh<br>
                                Paint a picture for you and me<br>
                                On the days when we were young, uh<br>
                                Singing at the top of both our lungs<br>
                                Now we're under the covers<br>
                                Fast forward to eighteen<br>
                                We are more than lovers<br>
                                Yeah, we are all we need<br>
                                When we're holding each other<br>
                                I'm taken back to 2002 (ooh)<br>
                                Yeah<br>
                                Dancing on the hood in the middle of the woods<br>
                                On an old Mustang, where we sang<br>
                                Songs with all our childhood friends<br>
                                And it went like this, say<br>
                                Oops, I got 99 problems singing bye, bye, bye<br>
                                Hold up, if you wanna go and take a ride with me<br>
                                Better hit me, baby, one more time, uh<br>
                                Paint a picture for you and me<br>
                                On the days when we were young, uh<br>
                                Singing at the top of both our lungs<br>
                                On the day we fell in love<br>
                                Ooh ooh, ooh ooh<br>
                                On the day we fell in love<br>
                                Ooh ooh, ooh ooh<br>
                                Dancing on the hood in the middle of the woods<br>
                                On an old Mustang, where we sang<br>
                                Songs with all our childhood friends<br>
                                Oh, now<br>
                                Oops, I got 99 problems singing bye, bye, bye<br>
                                Hold up, if you wanna go and take a ride with me<br>
                                Better hit me, baby, one more time<br>
                                Paint a picture for you and me<br>
                                On the days when we were young<br>
                                Singing at the top of both our lungs<br>
                                On the day we fell in love<br>
                                Ooh ooh, ooh ooh<br>
                                On the day we fell in love<br>
                                Ooh ooh, ooh ooh<br>
                                On the day we fell in love<br>
                                Ooh ooh, ooh ooh<br>
                                On the day we fell in love<br>
                                Ooh ooh, ooh ooh<br>
                                On the day we fell in love, love, love<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="controller-bar">
            <div class="audio">
                <audio ref="audio" :src="audioSrc" @timeupdate="updateTime" :loop="loop"></audio>
            </div>

            <div>
                <div class="progress-bar" :style="{ width: progress + '%' }"></div>
            </div>

            <div class="controller-bar-status">
                <div class="controller-nav">
                    <button @click="rewind">
                        <i class="ri-skip-back-line"></i>
                    </button>

                    <button @click="play">
                        <i class="ri-play-mini-fill"></i>
                    </button>

                    <button @click="pause">
                        <i class="ri-pause-mini-fill"></i>
                    </button>

                    <button @click="forward">
                        <i class="ri-skip-forward-line"></i>
                    </button>

                    <button @click="stop"><i class="ri-stop-circle-line"></i></button>
                </div>
                
                <div class="time-remaining">
                    <button @click="loopAudio">
                        {{ loop ? 'Disable' : 'Enable' }} Loop
                    </button>

                    {{ timeRemaining }}
                </div>
            </div>
        </div>
    </section>
    `,

    data() {
        return {
            showLyrics: false,
            fontSize: '1rem',
            audioSrc: "./public/includes/2002-anne-marie.mp3",
            audio: null,
            duration: 0,
            currentTime: 0,
            loop: false
        }
    },

    computed: {
        progress() {
          return (this.currentTime / this.duration) * 100;
        },

        timeRemaining() {
        let remainingTime = this.duration - this.currentTime;
        let minutes = Math.floor(remainingTime / 60);
        let seconds = Math.floor(remainingTime % 60);

        return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        }
    },

    methods: {
        setFontSize(size) {
            this.fontSize = size + 'rem';
        },

        play() {
            this.audio.play();
        },

        pause() {
            this.audio.pause();
        },
        
        rewind() {
            this.audio.currentTime -= 10;
        },
        
        forward() {
            this.audio.currentTime += 10;
        },
        
        stop() {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.currentTime = 0;
            this.duration = 0;
        },

        loopAudio() {
            this.loop = !this.loop;
            this.audio.loop = this.loop;
        },
        
        updateTime(event) {
            this.currentTime = event.target.currentTime;
            this.duration = event.target.duration;
        }
    },

    mounted() {
        this.audio = this.$refs.audio;
    }
}