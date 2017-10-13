<template>
  <div>
    <h2 class="mt-4">{{ $route.meta.title }}</h2>
    <h5 class="mt-4">Demo</h5>
    <div>
      <button type="button" class="btn btn-primary" @click="$refs.ab.resample()">Re-Sample</button>
    </div>
    <div class="candidate">candidate = <strong>{{ candidate }}</strong></div>
    <div class="demo mt-4">
      <v-ab
        cookie-name="cookie-event-example"
        @sample="sampled"
        @load="loaded"
        @pick="picked"
        ref="ab"
      >
        <div slot="candidate1">Candidate 1</div>
        <div slot="candidate2">Candidate 2</div>
        <div slot="candidate3">Candidate 3</div>
        <div slot="candidate4">Candidate 4</div>
        <div slot="candidate5">Candidate 5</div>
      </v-ab>
    </div>
    <h5 class="mt-4">Code</h5>
    <div>
      <pre><code class="html" ref="example"></code></pre>
    </div>
    <transition-group tag="div" name="alert" class="alertbox">
      <div class="alertbox-item" v-for="alert in alerts" :key="alert.id">
        <div class="alert" :class="['alert-' + alert.level]">{{ alert.message }}</div>
      </div>
    </transition-group>
  </div>
</template>
<script>

  var id = 0;

  export default {
    data() {
      return {
        alerts: [],
        candidate: null,
        example: `<v-ab
  cookie-name="cookie-event-example"
  @sample="sampled"
  @load="loaded"
  @pick="picked"
>
  <div slot="candidate1">Candidate 1</div>
  <div slot="candidate2">Candidate 2</div>
  <div slot="candidate3">Candidate 3</div>
  <div slot="candidate4">Candidate 4</div>
  <div slot="candidate5">Candidate 5</div>
</v-ab>`,
      };
    },
    mounted() {
      this.$refs.example.textContent = this.example;
      hljs.highlightBlock(this.$refs.example);
    },
    methods: {
      sampled(candidate) {
        this.candidate = candidate;
        var alert = {
          id: ++id,
          level: 'info',
          message: `"sampled" called. (arguments = "${[].slice.call(arguments).join('", "')}")`,
        };
        this.alerts.push(alert);
        setTimeout(function () {
          this.alerts.splice(this.alerts.indexOf(alert), 1);
        }.bind(this), 2000);
      },
      picked(candidate) {
        var alert = {
          id: ++id,
          level: 'success',
          message: `"picked" called. (arguments = "${[].slice.call(arguments).join('", "')}")`,
        };
        this.alerts.push(alert);
        setTimeout(function () {
          this.alerts.splice(this.alerts.indexOf(alert), 1);
        }.bind(this), 2000);
      },
      loaded() {
        var alert = {
          id: ++id,
          level: 'warning',
          message: `"loaded" called. (arguments = "${[].slice.call(arguments).join('", "')}")`,
        };
        this.alerts.push(alert);
        setTimeout(function () {
          this.alerts.splice(this.alerts.indexOf(alert), 1);
        }.bind(this), 2000);
      },
    },
  };
</script>
