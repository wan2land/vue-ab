Vue AB
======

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-ab.svg)](https://www.npmjs.com/package/vue-ab)
[![npm-version](https://img.shields.io/npm/v/vue-ab.svg)](https://www.npmjs.com/package/vue-ab)

A/B Testing Component for Vue2.

[Demo](http://wan2land.github.io/vue-ab/)

## Installation

```
npm install vue-ab --save
```

## Usage

### ES6

```js
import Vue from 'vue'
import VueAb from 'vue-ab'

Vue.use(VueAb, options)
```

### Globals

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <Ab
        @sample="(value) => candidate = value"
        :weight="{candidate1: 100, candidate2: 100, candidate3: 10, candidate4: 10}"
    >
        <div slot="candidate1">
            Candidate 1, (weight = 100)
        </div>
        <div slot="candidate2">
            Candidate 2, (weight = 100)
        </div>
        <div slot="candidate3">
            Candidate 3, (weight = 10)
        </div>
        <div slot="candidate4">
            Candidate 4, (weight = 10)
        </div>
        <div slot="candidate5">
            Candidate 5, (weight = 0), Never
        </div>
    </Ab>
  </div>

  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-ab.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```
