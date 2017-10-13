<style>
  .hidden-sm-down {
    display: block;
  }
  .hidden-md-up {
    display: none;
  }
  .demo {
    padding: .5rem;
    background: #F8F8F8;
  }
  .alertbox {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .alertbox-item {
    text-align: right;
  }
  .alertbox .alert {
    min-width: 200px;
    display: inline-block;
    text-align: left;
  }
  .alert-enter-active,
  .alert-leave-active {
    transition: all .5s;
  }
  .alert-enter {
    opacity: 0;
    transform: translateY(-10%);
  }
  .alert-leave-to {
    opacity: 0;
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
        <h4 class="mt-4">Vue AB</h4>
        <h6 class="mt-2">Examples</h6>
        <nav class="list-group">
          <template v-for="route in routes">
            <router-link
              :key="route.path"
              class="list-group-item list-group-item-action p-2"
              :class="{active: $route.path == route.path}"
              :to="route.path"
            >{{ route.title }}</router-link>
          </template>
        </nav>
      </div>
      <div class="col-12 col-md-9">
        <div class="mt-4">
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary" @click="cleanCookie">Clean All Cookie</button>
          </div>
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
        routes: routes.slice().map(function ({path, meta: {title}}) {
          return {
            path,
            title,
          }
        })
      }
    },
    methods: {
      cleanCookie() {
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        location.reload();
      },
    },
  };
</script>
