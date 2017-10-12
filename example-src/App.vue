<style>
  .hidden-sm-down {
    display: block;
  }
  .hidden-md-up {
    display: none;
  }
  @media (max-width: 767px) {
    .hidden-sm-down {
      display: none;
    }
    .hidden-md-up {
      display: block;
    }
  }
  .highlight {
    padding: 1rem;
    margin: 1rem 0;
    background-color: #f7f7f9;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
</style>
<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12 col-md-3">
        <h5 class="mt-4">Examples</h5>
        <nav class="list-group">
          <template v-for="route in routes">
            <router-link class="list-group-item list-group-item-action p-2" :to="route.path" :key="route.path">{{ route.name }}</router-link>
          </template>
        </nav>
      </div>
      <div class="col-12 col-md-9">
        <div class="mt-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import routes from './routes';
  export default {
    data() {
      return {
        routes: routes.map(function ({path, name}) {
          return {
            path,
            name,
          }
        })
      }
    },
  };
</script>
