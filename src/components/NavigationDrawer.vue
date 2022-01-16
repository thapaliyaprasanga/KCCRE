<template>
  <v-navigation-drawer
    @transitionend="$emit('toggleDrawer')"
    :value="true"
    absolute
    temporary
  >
    <v-list-item dark class="drawer-header">
      <v-list-item-avatar>
        <v-img src="logo.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title><strong>KC CRE Advisors</strong></v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in pages" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <span v-if="authenticated">
        <v-list-item
          v-for="(item, index) in authPages"
          :key="item.title"
          link
          :to="item.to"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </span>
      <span v-if="!authenticated">
        <v-list-item
          v-for="item in notAuthPages"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </span>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
const auth = namespace("auth");
@Component
export default class NavigationDrawer extends Vue {
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
