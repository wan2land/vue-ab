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
        cookie-name="cookie-weight-example"
        @sample="(_candidate) => candidate = _candidate"
        ref="ab"
      >
        <div slot="candidate1">
          Candidate 1, Div :-)
        </div>
        <p slot="candidate2">
          Candidate 2, p :-)
        </p>
        <template slot="candidate3">
          Candidate 3, String :-)
        </template>
        <template slot="candidate4">
          <div>Candidate 4</div>
          <p>Has Many Children :-)</p>
        </template>
        <!-- nothing :-) -->
        <template slot="candidate5"></template>
      </v-ab>
    </div>
    <h5 class="mt-4">Code</h5>
    <div>
      <pre><code class="html" ref="example"></code></pre>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        candidate: null,
        example: `<v-ab
  cookie-name="cookie-weight-example"
  @sample="(_candidate) => candidate = _candidate"
>
  <div slot="candidate1">
    Candidate 1, Div :-)
  </div>
  <p slot="candidate2">
    Candidate 2, p :-)
  </p>
  <template slot="candidate3">
    Candidate 3, String :-)
  </template>
  <template slot="candidate4">
    <div>Candidate 4</div>
    <p>Has Many Children :-)</p>
  </template>
  <!-- nothing :-) -->
  <template slot="candidate5"></template>
</v-ab>`,
      };
    },
    mounted() {
      this.$refs.example.textContent = this.example;
      hljs.highlightBlock(this.$refs.example);
    },
  };
</script>
