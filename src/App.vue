<template>
  <v-app>

    <!-- ヘッダ領域 -->
    <v-app-bar
      app
      color="ITVBlue"
      dark
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          :to="{ path: item.to }"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- コンテンツ領域 -->
    <v-main>
      <router-view />
    </v-main>

    <v-bottom-navigation
      app
      color="ITVBlue"
    >
      <v-btn v-for="item in menu" :key="item.title" :to="{ path: item.to }">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  props: {
  },
  data: () => ({
    drawer: false,
    menu: [
      {
        title: 'Home',
        icon: 'mdi-home',
        to: '/'
      },
      {
        title: 'WebAR',
        icon: 'mdi-augmented-reality',
        to: '/webar'
      },
      {
        title: 'about',
        icon: 'mdi-help-circle',
        to: '/about'
      },
    ],
  }),
};
</script>

<style>
.foreground {
  z-index: 0;
}

</style>
