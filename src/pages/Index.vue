<template>
  <q-page class="flex flex-center column">
    <div class="q-pa-md flex flex-center">
      <q-circular-progress
        show-value
        class="text-yellow q-ma-md"
        :value="countProgress"
        :thickness="0.2"
        size="600px"
        font-size="100px"
        color="light-blue"
        center-color="red"
        track-color="black"
      >
				{{countTime}}
			</q-circular-progress>
    </div>

    <div class="q-pa-md q-gutter-y-md column items-start">
      <q-btn-group>
        <q-btn @click="startTimer()" :disable="counting" :size="buttonSize" color="accent" icon="play_arrow" />
        <q-btn @click="resetTimer()" :size="buttonSize" color="accent" icon="replay" />
      </q-btn-group>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
			defProgress: 50,
      countProgress: 0,
			defTime: 30,
			countTime: '',
      pageTitle: '',
			countInterval: null,
			counting: false,
      buttonSize: '30px'
    }
  },
  mounted() {
    this.countTime = this.defTime + ':00'
    this.pageTitle = document.title
    this.countProgress = this.defProgress
  },
  methods: {
    startTimer() {
			this.counting = true

			// Set the date we're counting down to
			var countDownDate = new Date().getTime() + this.defTime * 60 * 1000;
      var totalDistance = countDownDate - new Date().getTime()

			// Update the count down every 1 second
			this.countInterval = setInterval(() => {

				// Get today's date and time
				var now = new Date().getTime();

				// Find the distance between now and the count down date
				var distance = countDownDate - now;

				// Time calculations for days, hours, minutes and seconds
				var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				if (seconds < 10) {
					seconds = '0' + seconds
				}

				// Output the result
				this.countTime = minutes + ':' + seconds
				this.countProgress = distance / totalDistance * this.defProgress
        document.title = this.pageTitle + ' ' + this.countTime

				// If the count down is over, write some text
				if (distance < 0) {
          alert('Time is up!!')
					this.resetTimer()
				}
			}, 1000);
    },
		resetTimer() {
			clearInterval(this.countInterval)
			this.countTime = this.defTime + ':00'
			this.countProgress = this.defProgress
			this.counting = false
      document.title = this.pageTitle
		}
  }
}
</script>
