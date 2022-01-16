<template>
  <v-app-bar
    height="70"
    app
    color="primary"
    dark
    elevation="6"
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      class="d-sm-none"
      @click="$emit('toggleDrawer')"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>KC Cre Advisors</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-list color="primary" class="d-sm-flex d-none">
      <v-list-item
        v-for="(item, index) in pages"
        :key="index"
        link
        :to="item.to"
      >
        <v-list-item-title> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <span class="d-flex" v-if="authenticated">
        <v-list-item
          v-for="(item, index) in authPages"
          :key="index"
          :to="item.to"
          @click="handleClick(index)"
        >
          <v-list-item-title> {{ item.title }} </v-list-item-title>
        </v-list-item>
      </span>
      <span class="d-flex" v-if="!authenticated">
        <v-list-item
          v-for="(item, index) in notAuthPages"
          :key="index"
          :to="item.to"
        >
          <v-list-item-title> {{ item.title }} </v-list-item-title>
        </v-list-item>
      </span>
    </v-list>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import NavigationDrawer from "./NavigationDrawer.vue";

const auth = namespace("auth");
@Component({
  components: {
    NavigationDrawer,
  },
})
export default class AppBar extends Vue {
  @auth.Getter
  private authenticated: boolean;
  @Prop() readonly authPages: Array<Record<string, any>>;
  @Prop() readonly pages: Record<string, unknown>;
  @Prop() readonly notAuthPages: Record<string, unknown>;

  handleClick(index: number): void {
    this.authPages[index].click.call(this);
  }
}
</script>

<style lang="scss">
.drawer-header {
  background: $primary;
  height: 70px;
}
</style>
