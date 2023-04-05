export default {
    template: `
    <section class="video-page">
        <div class="video-heading">
            
        </div>

        <div class="video-content">
            <div>
                <div class="video-box">
                    <video ref="video" :src="videoSrc" @timeupdate="updateTime">
                        <source src="./public/includes/interstellar-trailer.mp4" type="video/mp4">
                    </video>

                    <div>
                        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
                    </div>

                    <div class="video-controller-status">
                        <div class="video-controller">
                            <button @click="rewind"> 10s</button>
                            <button @click="play">Play</button>
                            <button @click="pause">Pause</button>
                            <button @click="stop">Stop</button>
                            <button @click="forward"> 10s</button>
                        </div>

                        <div class="time-remaining">
                            {{ timeRemaining }}
                        </div>
                    </div>

                    <div class="caption-box">
                        <div class="input-caption" v-if="showCaption">
                            <textarea v-model="caption" placeholder="Add caption here."></textarea>

                            <button @click="saveCaption" class="saveCaptionBtn">Save Caption</button>
                        </div>

                        <div class="caption-length" v-if="captionList.length > 0">
                            <ul>
                                <li v-for="(caption, index) in captionList" :key="index">
                                <span class="caption-time">{{ caption.time }}</span>
                                <span>{{ caption.caption }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="transcript-show-box">
                    <div class="video-nav">
                        <button @click="showTranscript = !showTranscript"
                            class="btn-transcript">
                            <i class="ri-file-3-line"></i>
                            <p>View Transcript</p>
                        </button>
                        
                        <a class="btn-transcript" href="./public/includes/Interstellar-Trailer-Transcript.pdf" target="_blank">
                            <button>
                                <i class="ri-file-download-line"></i>
                                <p>Download Transcript</p>
                            </button>
                        </a>

                        <button class="add-caption btn-transcript" @click="addCaption">
                            <i class="ri-add-circle-line"></i>
                            <p>Add Caption</p>
                        </button>
                    </div>

                    <div class="transcript" v-show="showTranscript">
                        <div class="transcript-box">
                            <h3>Transcript</h3>
                            <p :style="{ fontSize: fontSize }"> We’ve always defined ourselves by the ability to overcome the impossible.<br>
                            And we count these moments,<br>
                            (The first ever to fly faster than the speed of sound)<br>
                            these moments when we dared to aim higher, to break barriers, to reach for the stars,<br>
                            (Gemini 6, you are go!) to make the unknown known.<br>
                            We count these moments as our proudest achievements.<br>(having fired the imagination of a generation)<br>
                            But we lost all that.<br>
                            (Pulls into port, for the last time)<br>
                            And perhaps we’ve just forgotten that we are still pioneers and we’ve barely begun.<br>
                            And that are greatest accomplishments cannot be behind us, as our destiny lies above us.<br>
                            Source: LYBIO.net</p>
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
                </div>
            </div>
        </div>
    </section>
    `,

    data() {
        return {
            showTranscript: false,
            fontSize: '1rem',
            videoSrc: "./public/includes/interstellar-trailer.mp4",
            video: null,
            duration: 0,
            currentTime: 0,
            showCaption: false,
            caption: '',
            captionList: []
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
            this.video.play();
        },
        
        pause() {
            this.video.pause();
        },

        rewind() {
            this.video.currentTime -= 10;
        },
        
        forward() {
            this.video.currentTime += 10;
        },

        stop() {
            this.video.pause();
            this.video.currentTime = 0;
            this.currentTime = 0;
            this.duration = 0;
        },

        updateTime(event) {
            this.currentTime = event.target.currentTime;
            this.duration = event.target.duration;
        },

        addCaption() {
            this.showCaption = true;
        },

        saveCaption() {
            let time = this.convertTimeToString(this.currentTime);
            this.captionList.push({time: time, caption: this.caption});
            this.caption = '';
            this.showCaption = false;
        },

        convertTimeToString(time) {
            let minutes = Math.floor(time / 60);
            let seconds = Math.floor(time % 60);
            return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        }
    },

    mounted() {
        this.video = this.$refs.video;
    }
}